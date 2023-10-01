import { Chain, DialogueRole } from "@/src/zeus";

const URL = "https://faker-api.dev.project.graphqleditor.com/graphql";
const headers = {
  "Content-type": "application/json",
  Key: process.env.KEY || "",
  Team: process.env.TEAM || "",
};
const chain = (option: "query" | "mutation") => Chain(URL, { headers })(option);

export const useBackend = () => {
  const createDialogue = async (dialogueId?: string) => {
    try {
      const res = await chain("query")({
        createBotDialogue: [
          {
            botPayload: { payload: "", role: DialogueRole.assistant },
            dialogueId,
            userPayload: { payload: "", role: DialogueRole.user },
          },
          true,
        ],
      });
      if (res.createBotDialogue) return res.createBotDialogue;
    } catch {}
  };
  const praiseTheconverstaion = async (conversationId: string) => {
    try {
      await chain("mutation")({
        reactOnConversation: [{ conversationId }, true],
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
      chain("query")({ useFineTuneJob: true });
    } catch {}
  };

  return {
    createDialogue,
    praiseTheconverstaion,
    getSuggestedUnis,
    triggerFintTunning,
  };
};
