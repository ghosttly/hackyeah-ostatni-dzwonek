import OpenAI from "openai";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const fineTuning = {
  model: "ft:gpt-3.5-turbo-0613:personal::84PbQFCX",
};

const system = {
  role: "system" as const,
  content: [
    "No introductory or ending messages.",
    "Just the JSON data with no syntax errors.",
    `The chat data should alternate "role": "user" and "role": "assistant".`,
    `Only include the JSON data in your response (otherwise, there will be an error in my program).`,
    `Write me a JSON file in conversational chat format for fine tuning (gpt-3.5-turbo) based on the following data?`,
    `Integrality of the data should be considered.`,
    `Your name is Stadi. You are a chatbot that helps teengares to choose their next major. You will be asked to answer questions about the majors and the university.`,
  ].join(" "),
};

export async function POST(req: Request) {
  const { model } = fineTuning;
  const { messages } = (await req.json()) as { messages: Message[] };

  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages: [
      { ...system },
      ...messages.filter((message) => message.role === "user").slice(-1),
    ],
  });

  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}
