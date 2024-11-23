// Importa e carrega as variáveis de ambiente definidas no arquivo .env para o processo Node.js.
import 'dotenv/config';
// Importa a função para conectar ao banco de dados MongoDB
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Chama a função e aguarda a conclusão da conexão
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getPosts() {
    // Conecta ao banco de dados "instalike-back" e obtém a coleção "posts"
    const db = conexao.db("instalike-back"); // Conecta ao banco de dados especificado
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados
  
    // Realiza uma consulta para encontrar todos os documentos na coleção "posts" e retorna um array com os resultados
    return colecao.find().toArray();
  };

export async function postarPost(novoPost) {
    // Conecta ao banco de dados "instalike-back" e obtém a coleção "posts"
    const db = conexao.db("instalike-back"); // Conecta ao banco de dados especificado
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados

    // Realiza uma consulta para encontrar todos os documentos na coleção "posts" e retorna um array com os resultados
    return colecao.insertOne(novoPost);
  
  };

export async function atualizarPost(id, novoPost) {
    // Conecta ao banco de dados "instalike-back"
    const db = conexao.db("instalike-back"); 
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Converte o ID fornecido para o formato ObjectId (usado pelo MongoDB)
    const objID = ObjectId.createFromHexString(id); 
    // Atualiza o documento na coleção que corresponde ao ID, 
    // substituindo os campos existentes pelos valores do novoPost
    return colecao.updateOne(
        { _id: new ObjectId(objID) }, // Filtro: encontra o documento pelo ID
        { $set: novoPost } // Operação: atualiza os campos com os dados fornecidos
    );
};
