export function up(knex) {
  return knex.schema.createTable('produtos', function (table) {
    table.increments() ;
    table.string('nome');
    table.float('preco', 5,2);
    table.timestamps();
  });
};


export function down(knex) {
  return knex.schema.dropTable('produtos')
};
