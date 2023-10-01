import { Chain, DialogueRole } from "@/src/zeus";

const URL = process.env.BACKEND ?? "";
const headers = {
  "Content-type": "application/json",
};
const chain = (option: "query" | "mutation") => Chain(URL, { headers })(option);

export const useBackend = () => {
  const createDialogue = async (
    userPayload: string,
    botPayload: string,
    dialogueId?: string
  ) => {
    try {
      const res = await chain("mutation")({
        createBotDialogue: [
          {
            botPayload: { payload: botPayload, role: DialogueRole.assistant },
            dialogueId,
            userPayload: { payload: userPayload, role: DialogueRole.user },
          },
          true,
        ],
      });
      if (res.createBotDialogue) return res.createBotDialogue;
    } catch {}
  };
  const praiseTheConverstaion = async (conversationId: string) => {
    try {
      await chain("mutation")({
        reactOnConversation: [{ conversationId, reaction: true }, true],
      });
    } catch {}
  };
  const getSuggestedUnis = async (conversationId: string) => {
    try {
      const res = await chain("query")({
        suggestionUnivesties: [
          { contextId: conversationId },
          {
            university: { website: true, name: true },
          },
        ],
      });
      if (!!res.suggestionUnivesties) return res.suggestionUnivesties;
    } catch {}
  };
  const triggerFintTunning = () => {
    try {
      chain("mutation")({ useFineTuneJob: true });
    } catch {}
  };

  return {
    createDialogue,
    praiseTheConverstaion,
    getSuggestedUnis,
    triggerFintTunning,
  };
};
