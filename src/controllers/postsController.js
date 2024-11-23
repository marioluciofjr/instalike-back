import { getPosts, postarPost, atualizarPost} from "../models/postModel.js";  // Importando funções de modelo para lidar com os posts
import fs from "fs";  // Importando o módulo fs (file system) para manipular arquivos
import gerarDescricaoComGemini from "../services/geminiService.js"

// Função para listar todos os posts
export async function listarPosts(req, res) {
    // Obtendo os posts do banco de dados
    const posts = await getPosts(); 
    
    // Retornando os posts como resposta JSON com status 200 (OK)
    res.status(200).json(posts);
}; 

// Função para criar um novo post
export async function criarPosts(req, res) {
    const novoPost = req.body;  // Obtendo o novo post do corpo da requisição
    
    try {
        // Tentando criar o post no banco de dados
        const postCriado = await postarPost(novoPost);
        
        // Retornando o post criado com status 200 (OK)
        res.status(200).json(postCriado);
    } catch(erro) {
        // Em caso de erro, logando a mensagem de erro e retornando status 500 (Erro interno do servidor)
        console.error(erro.message);
        res.status(500).json({"Erro": "Deu merda na requisição"});
    }
};

// Função para fazer upload de uma imagem
export async function uploadImagem(req, res) {
    // Criando um objeto para o novo post com informações de imagem
    const novoPost = {
        descricao: "",  // Descrição está vazia, poderia ser preenchida dependendo da requisição
        imgUrl: req.file.originalname,  // Nome original do arquivo de imagem enviado
        alt: ""  // Texto alternativo para a imagem (poderia ser preenchido se necessário)
    };

    try {
        // Tentando criar o post no banco de dados
        const postCriado = await postarPost(novoPost);
        
        // Criando o novo caminho para salvar a imagem com base no ID gerado no banco
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        
        // Movendo a imagem da pasta temporária para a pasta de uploads com o novo nome
        fs.renameSync(req.file.path, imagemAtualizada);
        
        // Retornando o post criado com status 200 (OK)
        res.status(200).json(postCriado);
    } catch(erro) {
        // Em caso de erro, logando a mensagem de erro e retornando status 500 (Erro interno do servidor)
        console.error(erro.message);
        res.status(500).json({"Erro": "Deu merda na requisição"});
    }
};

export async function atualizarNovoPost(req, res) {
    // Obtém o ID do post a partir dos parâmetros da requisição
    const id = req.params.id; 
    // Define a URL da imagem baseada no ID do post
    const urlImagem = `http://localhost:3000/${id}.png`;
     
    try {
        // Lê o arquivo de imagem a partir da pasta 'uploads' usando o ID do post
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        // Gera uma descrição para a imagem utilizando uma função assíncrona
        const descricao = await gerarDescricaoComGemini(imgBuffer)

        // Cria um objeto representando o post atualizado com os dados processados
        const post = {
            imgUrl: urlImagem, // URL da imagem no servidor
            descricao: descricao, // Descrição gerada automaticamente
            alt: req.body.alt // Texto alternativo fornecido no corpo da requisição
        }  

        // Atualiza o post no banco de dados (ou em outro local) com base no ID
        const postCriado = await atualizarPost(id, post);

        // Retorna uma resposta de sucesso com o post atualizado em formato JSON
        res.status(200).json(postCriado);
    } catch(erro) {
        // Em caso de erro, registra a mensagem no console
        console.error(erro.message);
        // Envia uma resposta de erro com status 500 e uma mensagem genérica
        res.status(500).json({"Erro": "Deu merda na requisição"});
    }
};
