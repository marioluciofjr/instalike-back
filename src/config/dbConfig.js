import { MongoClient } from 'mongodb';  // Importa o MongoClient do pacote mongodb para se conectar ao banco de dados

// Função assíncrona que realiza a conexão com o banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
  let mongoClient;  // Variável para armazenar a instância do MongoClient

  try {
      // Cria uma nova instância do MongoClient com a string de conexão fornecida
      mongoClient = new MongoClient(stringConexao);

      // Exibe uma mensagem no console indicando que a conexão está sendo realizada
      console.log('Conectando ao cluster do banco de dados...');

      // Aguarda a conexão com o banco de dados ser estabelecida
      await mongoClient.connect();

      // Mensagem de sucesso caso a conexão seja bem-sucedida
      console.log('Conectado ao MongoDB Atlas com sucesso!');

      // Retorna a instância do MongoClient, permitindo a interação com o banco de dados
      return mongoClient;
  } catch (erro) {
      // Em caso de erro na conexão, exibe uma mensagem de erro no console
      console.error('Falha na conexão com o banco!', erro);

      // Encerra o processo em caso de falha de conexão
      process.exit();
  }
}
