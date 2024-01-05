import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/RegisterValidator'
import VerifyEmail from 'App/Mailers/VerifyEmail'

export default class AuthController {

    public async register({ request, response }: HttpContextContract) {
        // Validate request
        await request.validate(RegisterValidator);
        // request body
        const user = new User();
        const email = request.input('email');
        const password = request.input('password');
        const firstname = request.input('firstname');
        const lastname = request.input('lastname');
        const dob = request.input('dob');
        // User creation
        try {
            await user.fill({ email: email, password: password, firstname: firstname, lastname: lastname, dob: dob }).save();
            response.created();
        } catch (error) {
            response.unprocessableEntity({ error: 'L\'adresse email est déjà utilisée.' })
        }
        // Send confirmation mail
        await new VerifyEmail(user).send()
    }

    public async login({ auth, request, response }: HttpContextContract) {
        // request body
        const { email, password, rememberMe } = request.only(['email', 'password', 'rememberMe'])
        // Lookup user manually
        try {
            const user = await User.findByOrFail('email', email);
            // Verify password
            if (!(await Hash.verify(user.password, password))) {
                return response.badRequest({ error: 'Les informations d\'identification sont invalides' })
            }
            // Verify status
            if (!user.active) {
                return response.unauthorized({ error: 'Votre compte n\'est pas activé. Veuillez consulter vos mails.' })
            }
            await auth.use('web').loginViaId(user.id, rememberMe)
        } catch (error) {
            console.error(error);
            response.notFound({ error: 'Il n\'existe aucun compte lié à cette adresse email.' })
        }
    }

    public async logout({ auth }: HttpContextContract) {
        await auth.use('web').logout()
        // Add redirect soon with Inertia
    }

}