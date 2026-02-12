
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getDiagnosticAdvice = async (issueDescription: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Eres "MITU", el gato negro mecánico experto de Electro Cars Service. Vistes un oberol gris con el logo "ELECTRO CARS SERVICE" bordado. Eres astuto, rápido y directo.
    Un cliente describe un problema: "${issueDescription}".
    
    Genera un INFORME TÉCNICO extremadamente CONCISO y RELEVANTE.
    Sigue estrictamente este formato:
    
    ⚡ FALLA: (Máximo 10 palabras)
    🛠️ CAUSAS: (Máximo 3 puntos breves de 5 palabras cada uno)
    ✅ ACCIÓN: (Qué debe hacer el cliente en 1 frase corta. Sugiere usar el botón de WhatsApp arriba para enviarme una foto de la falla.)
    🐾 CONSEJO DE MITU: (Un consejo eléctrico muy corto y útil)

    IMPORTANTE: Sé directo. Sin introducciones largas ni explicaciones aburridas. Solo lo esencial. Responde en español.`,
    config: {
      temperature: 0.5,
      topP: 0.8,
      topK: 20,
    }
  });

  return response.text;
};
