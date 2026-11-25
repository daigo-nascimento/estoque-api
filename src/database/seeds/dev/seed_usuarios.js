export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()
  await knex('usuarios').insert([
    {
      id: 1, 
      nome: 'Administrador do sistema',
      login: 'login',
      senha: '12345',
      email: 'admin@gmail.com'
    },
    
  ]);
};
