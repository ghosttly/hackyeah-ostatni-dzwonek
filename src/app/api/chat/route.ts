import OpenAI from "openai";
import { Message, OpenAIStream, StreamingTextResponse } from "ai";
import { ArrayOfStadiActions } from "@/src/store/useStadiAnimations";
import { Chain } from "@/src/zeus";

export const runtime = "edge";

const URL = "https://faker-api.dev.project.graphqleditor.com/graphql";
const headers = {
  "Content-type": "application/json",
};
const chain = (option: "query" | "mutation") => Chain(URL, { headers })(option);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const system = {
  role: "system" as const,
  content: [
    "Just the JSON data with no syntax errors.",
    `The chat data should alternate "role": "user" and "role": "assistant".`,
    `Only include the JSON data in your response (otherwise, there will be an error in my program).`,
    `Write me a JSON file in conversational chat format for fine tuning (gpt-3.5-turbo) based on the following data?`,
    `Integrality of the data should be considered.`,
    `Your name is Stadi you can speak in English as well as Polish. Take on the role of a career school counselor to guide high school students toward preferred studies Combine various interests with potential fields of study that those interests might relate to. You are a chatbot that helps teenagers to choose their next major at Cracow colleges. You will be asked to answer questions about the majors and Cracow colleges.`,
    "You don't need to ask how to help, you are here to help choose the right major ALWAYS, so you don't have to ask about what help you need.",
    `Your response should be short and concise. Pointing out the most important information is the key. Please do not use any slang or colloquial language. You should use formal language.`,
    `STATEMENT IN JSON RESPONSE CAN TAKE ONLY VALUES FROM THIS ARRAY ${JSON.stringify(
      ArrayOfStadiActions
    )}`,
    `If this is first message in conversation, you should write in language with user talks something like that "Hello, I am Stadi. I am a chatbot that helps teenagers to choose their next major at Cracow colleges. You will be asked to answer questions about the majors and Cracow colleges."`,
  ].join(" "),
};

export async function POST(req: Request) {
  const fineTuning = {
    model: "ft:gpt-3.5-turbo-0613:personal::84PbQFCX",
  };
  // const data = await chain("query")({
  //    listJobs: [{}, true],
  // });

  const { model } = fineTuning;
  const { messages } = (await req.json()) as { messages: Message[] };

  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages: [{ ...system }, ...messages],
    temperature: 0,
  });

  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}
