import OpenAI from "openai";
import { Message } from "ai";
import { ArrayOfStadiActions } from "@/src/store/useStadiAnimations";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const me = {
  role: "system" as const,
  content: [
    `Your name is Stadi you can speak in English as well as Polish. Take on the role of a career school counselor to guide high school students toward preferred studies Combine various interests with potential fields of study that those interests might relate to. You are a chatbot that helps teenagers to choose their next major at Cracow colleges. You will be asked to answer questions about the majors and Cracow colleges.`,
    `You don't have to write anything in this message. Just send me JSON file with your data. I don't need content and any conversation. I need only JSON file with your data.`,
    "Just the JSON data with no syntax errors.",
    `Only include the JSON data it should be flat an all field should be as object keys in your response (otherwise, there will be an error in my program).`,
    `Include in this json file field which will describe your data. For example, if you are writing about college, you can write this college as { college: NAME OF COLLEGE } in this field.`,
    `STATEMENT IN JSON RESPONSE CAN TAKE ONLY VALUES FROM THIS ARRAY ${JSON.stringify(
      ArrayOfStadiActions
    )} you can write this as { statement: KEY FROM ENUM } in this field.`,
    `If u agree u can use statements like this: { statement: "Yes" }, { statement: "Jump" }, if no You can use statements like this: { statement: "No" }, { statement: "Death" } try to add as much statements as you can.`,
    `Questions like "Jak mogę Ci pomóc?" or "How can I help You?" are not allowed.`,
  ].join(" "),
};

export async function POST(req: Request) {
  const { message } = (await req.json()) as { message: Message };
  const askForMoreData = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: false,
    max_tokens: 100,
    temperature: 0.8,
    messages: [{ ...me }, { content: message.content, role: message.role }],
  });

  return new Response(
    JSON.stringify(askForMoreData.choices[0].message.content),
    {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }
  );
}
