import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/RegisterValidator'
import Env from '@ioc:Adonis/Core/Env'
import crypto = require('crypto');


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
        await user.fill({ email: email, password: password, firstname: firstname, lastname: lastname, dob: dob }).save();

        response.created();
    }

    public async login({ auth, request, response, session }: HttpContextContract) {
        // request body
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
        const token = await auth.use('api').generate(user, {
            expiresIn: '30 days'
        });
        const cookieName = Env.get('SUCCULENT_AUTH_TOKEN').concat(crypto.randomBytes(6).toString('hex'));

        session.put('cookieName', cookieName)
        response.cookie(cookieName, token.toJSON().token, {
            maxAge: "30d"
        })

        return token
    }

    public async logout({ auth, session, response }: HttpContextContract) {
        await auth.use('api').revoke()

        response.clearCookie(session.get('cookieName'))
        return {
            revoked: true
        }
    }
}