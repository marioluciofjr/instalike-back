// Importa os pacotes da dependência express dentro de node_modules
import express from "express";  // Importa o pacote Express para criar o servidor HTTP
import multer from "multer";  // Importa o pacote Multer para fazer upload de arquivos
import { listarPosts, criarPosts, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";  // Importa as funções de controle de posts do arquivo postsController.js
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// Configurações de armazenamento do Multer
const storage = multer.diskStorage({
    // Define o diretório onde as imagens serão armazenadas
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // Armazena a imagem na pasta 'uploads'
    },
    // Define o nome do arquivo de upload
    filename: function (req, file, cb) {
        cb(null, file.originalname);  // Usa o nome original do arquivo recebido
    }
})

const upload = multer({ dest: "./uploads", storage });  // Cria uma instância do Multer configurada

// Função de configuração das rotas do servidor
const routes = (app) => {
    app.use(express.json());  // Habilita o middleware JSON para analisar o corpo das requisições

    app.use(cors(corsOptions));

    // Rota para buscar os posts
    app.get("/posts", listarPosts);  // Define uma rota GET para listar posts

    // Rota para criar novos posts
    app.post("/posts", criarPosts);  // Define uma rota POST para criar posts

    // Rota para fazer upload de imagens
    app.post("/upload", upload.single("imagem"), uploadImagem);  // Rota POST para fazer upload de uma imagem. O middleware `upload.single("imagem")` é responsável por processar o arquivo antes de chamar a função `uploadImagem` do controller.

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;  // Exporta a função de configuração de rotas para ser usada no servidor
