import { Chain, DialogueRole } from "@/src/zeus";

const URL = "https://faker-api.dev.project.graphqleditor.com/graphql";
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
  const getSuggestedUnis = async () => {
    try {
      const res = await chain("query")({
        listUnis: { name: true },
      });
      if (!!res.listUnis) return res.listUnis;
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
