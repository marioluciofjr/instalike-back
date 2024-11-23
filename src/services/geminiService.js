// Importa a biblioteca para interagir com o Google Generative AI (Gemini)
import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa uma instância do cliente da API do Google Generative AI com a chave de API obtida das variáveis de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Configura o modelo generativo a ser utilizado (neste caso, "gemini-exp-1114")
const model = genAI.getGenerativeModel({ model: "gemini-exp-1114" });

// Exporta uma função assíncrona para gerar uma descrição usando o modelo Gemini
export default async function gerarDescricaoComGemini(imageBuffer) {
  // Define o prompt para guiar o modelo a gerar uma descrição específica
  const prompt =
    "Gere uma descrição em um parágrafo de 20 palavras alinhado à esquerda, em português do brasil, para a seguinte imagem";

  try {
    // Cria o objeto de imagem, incluindo os dados codificados em base64 e o tipo MIME da imagem
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"), // Converte o buffer da imagem para base64
        mimeType: "image/png", // Especifica o tipo de arquivo da imagem
      },
    };

    // Faz a chamada ao modelo generativo com o prompt e a imagem
    const res = await model.generateContent([prompt, image]);

    // Retorna o texto da resposta gerada ou um texto padrão caso não seja gerado
    return res.response.text() || "Alt-text não disponível.";
  } catch (erro) {
    // Loga o erro no console para depuração
    console.error("Erro ao obter alt-text:", erro.message, erro);
    // Lança um erro genérico para ser tratado pela função chamadora
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}
