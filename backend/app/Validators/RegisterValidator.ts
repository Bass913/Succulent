import { schema, CustomMessages, rules, validator } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { MyReporter } from './Reporters/MyReporter'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) { }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string([ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string([
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */

  public reporter = MyReporter;

  public schema = schema.create({
    email: schema.string({}, [
      rules.trim(),
      rules.email(),
    ]),
    firstname: schema.string({}, [
      rules.trim(),
      rules.maxLength(50)
    ]),
    lastname: schema.string({}, [
      rules.trim(),
      rules.maxLength(35)
    ]),
    dob: schema.date(),
    password: schema.string({}, [
      rules.trim(),
      rules.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
      rules.minLength(12)
    ])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'email.required': 'Le champ "Adresse email" ne peut pas être vide.',
    'email.email': 'Veuillez saisir une adresse email valide.',
    'password.required': 'Le champ "Mot de passe" ne peut pas être vide.',
    'password.regex': 'Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial.',
    'password.minLength': 'Le mot de passe doit contenir au moins 12 caractères',
    'firstname.required': 'Le champ "Prénom" ne peut pas être vide.',
    'firstname.maxLength': 'Le prénom ne peux excéder 50 caractères.',
    'lastname.required': 'Le champ "Nom" ne peut pas être vide.',
    'lastname.maxLength': 'Le nom ne peux excéder 35 caractères.',
    'dob.required': 'Le champ "Date de naissance" ne peut pas être vide.',
    'dob.date.format': 'La date doit être au format \'YYYY-MM-DD\' (ISO 8601)'
  }
}
