import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.string('password').notNullable()
      table.string('email').notNullable().unique()
      table.date('dob').notNullable()
      table.boolean('active').nullable().defaultTo(false)
      table.string('remember_me_token').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}