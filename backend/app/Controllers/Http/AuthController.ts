import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class AuthController {

    public async register({ request, response }: HttpContextContract) {

        await request.validate(RegisterValidator);

        const user = new User();
        const email = request.input('email');
        const password = request.input('password');
        const firstname = request.input('firstname');
        const lastname = request.input('lastname');
        const dob = request.input('dob');

        await user.fill({ email: email, password: password, firstname: firstname, lastname: lastname, dob: dob }).save();

        response.status(201);
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        // Lookup user manually
        const user = await User.findByOrFail('email', email);

        // Verify password
        if (!(await Hash.verify(user.password, password))) {
            return response.unauthorized({ error: 'Identifiants invalides, email ou mot de passe incorrect.' })
        }

        // Verify status
        if (!user.active) {
            return response.forbidden({ error: 'Votre compte n\'est pas activé. Veuillez consulter vos mails.' })
        }
        // Generate token
        await auth.use('api').generate(user, {
            expiresIn: '30 days'
        });
    }

    public async logout({ auth }: HttpContextContract) {
        await auth.use('api').revoke()
        return {
            revoked: true
        }
    }
}