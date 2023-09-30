import { Chain, DialogueRole } from "@/src/zeus";

const URL = "http://25.57.229.254:8080/graphql";
const headers = {
  "Content-type": "application/json",
  Key: process.env.KEY || "",
  Team: process.env.TEAM || "",
};
const chain = (option: "query" | "mutation") => Chain(URL, { headers })(option);

export const useBackend = () => {
  const createDialogue = async (dialogueId?: string) =>
    await chain("query")({
      createBotDialogue: [
        { payload: { payload: "", role: DialogueRole.user }, dialogueId },
        true,
      ],
    });
  const praiseTheconverstaion = async (conversationId: string) =>
    await chain("mutation")({
      reactOnConversation: [{ conversationId }, true],
    });

  return { createDialogue, praiseTheconverstaion };
};
