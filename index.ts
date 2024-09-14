import OpenAI from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY!,
});

async function main() {
    try {
        const embedding = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: "The quick brown fox jumped over the lazy dog",
            encoding_format: "float",
        });
        console.log(embedding);
    } catch (error) {
        console.log(error);
    }
}

main();