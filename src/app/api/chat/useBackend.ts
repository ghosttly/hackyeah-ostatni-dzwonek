import { Chain, DialogueRole } from "@/src/zeus";

const URL = "http://faker-api.dev.project.graphqleditor.com/graphql";
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
        {
          botPayload: { payload: "", role: DialogueRole.assistant },
          dialogueId,
          userPayload: { payload: "", role: DialogueRole.user },
        },
        true,
      ],
    });
  const praiseTheconverstaion = async (conversationId: string) =>
    await chain("mutation")({
      reactOnConversation: [{ conversationId }, true],
    });
  const getSuggestedTags = async (contextId: string) =>
    await chain("query")({
      listUnis: { name: true, paths: { _id: true, name: true, tags: true } },
    });

  const startFineTuning = async () => {
    await chain("query")({ useFineTuneJob: true });
  };

  return {
    createDialogue,
    praiseTheconverstaion,
    getSuggestedTags,
    startFineTuning,
  };
};
