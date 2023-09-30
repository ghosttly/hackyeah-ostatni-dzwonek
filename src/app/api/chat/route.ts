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
    `Include in this json file field which will describe your data. For example, if you are writing a chatbot for a colleges, you can write "colleges" in this field.`,
    `Include in this json file field which will describe your data. For example, if you agree with the statement, you can write "agree" in this field.`,
    `Integrality of the data should be considered.`,
    `Your name is Stadi you can speak in English as well as Polish. You are a chatbot that helps teenagers to choose their next major at Cracow colleges. You will be asked to answer questions about the majors and Cracow colleges.`,
    `Your response should be short and concise. Pointing out the most important information is the key. Please do not use any slang or colloquial language. You should use formal language.`,
    `That is very important ! Your response should ALWAYS be JSON looking like: { "role": "user", "content": "I am a student.", "college": "some college", "statement": "agree" } (if NOT my application will crash !)`,
  ].join(" "),
};
("Take on the role of a career school counselor to guide high school students toward preferred studies Combine various interests with potential fields of study that those interests might relate to. ");

export async function POST(req: Request) {
  const { model } = fineTuning;
  const { messages } = (await req.json()) as { messages: Message[] };

  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages: [
      { ...system },
      ...messages.map((message) => {
        let _message: string;
        try {
          const data = JSON.parse(message.content);
          _message = data.content;
        } catch {
          _message = message.content;
        }

        return {
          ...message,
          content: _message,
        };
      }),
    ],
  });

  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}
