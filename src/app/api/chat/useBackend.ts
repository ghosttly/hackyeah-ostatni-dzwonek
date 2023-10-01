import { useStadiStore } from "@/src/store/useStadiAnimations";
import { Chain, DialogueRole } from "@/src/zeus";

const URL = "http://faker-api.dev.project.graphqleditor.com/graphql";
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
  const getSuggestedTags = async (contextId: string) => {
    try {
      await chain("query")({
        listUnis: { name: true, paths: { _id: true, name: true, tags: true } },
      });
    } catch {}
  };
  const startFineTuning = async () => {
    try {
      await chain("query")({ useFineTuneJob: true });
    } catch {}
  };

  const getfineTuneConversations = async () => {
    try {
      await chain("query")({ listJobs: {} });
    } catch {}
  };

  return {
    createDialogue,
    praiseTheconverstaion,
    getSuggestedTags,
    startFineTuning,
  };
};
