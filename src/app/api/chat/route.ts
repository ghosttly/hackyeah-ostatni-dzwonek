import OpenAI from "openai";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const fineTuning = {
  model: "ft:gpt-3.5-turbo-0613:personal::84PbQFCX",
};

export async function POST(req: Request, res: Response) {
  const { model } = fineTuning;
  const { messages } = (await req.json()) as { messages: Message[] };

  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages: [
      {
        role: "system",
        content: `Only include the JSON data in your response (otherwise, there will be an error in my program). No introductory or ending messages. Just the JSON data with no syntax errors. The chat data should alternate "role": "user" and "role": "assistant". Write me a JSON file in conversational chat format for fine tuning (gpt-3.5-turbo) based on the following data? Integrality of the data should be considered. You are the assistant for providing medical checkups information for the company Monstarlab Inc. Following questions will be from employees of the Monstarlab company.`,
      },
      ...messages.filter((message) => message.role === "user").slice(-1),
    ],
  });

  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}
