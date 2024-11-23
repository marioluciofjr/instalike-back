// Importa os pacotes da dependência express dentro de node_modules
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do Express, que será nosso servidor web.
const app = express();
app.use(express.static("uploads"))
routes(app); 


// Inicia o servidor na porta 3000 e mostra uma mensagem no console quando estiver pronto.
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});