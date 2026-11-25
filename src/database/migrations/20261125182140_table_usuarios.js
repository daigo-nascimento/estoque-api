export function up(knex) {
  return knex.schema.createTable('usuarios', function (table) {
    table.increments() ;
    table.string('senha', 100);
    table.string('login', 20);
    table.string('email', 50);
    table.string('nome', 50);
    table.timestamps();
  });
};


export function down(knex) {
  return knex.schema.dropTable('usuarios')
};
