import { Chain, DialogueRole } from "@/zeus";

const URL = "http://25.57.229.254:8080/graphql";
const headers = {
  "Content-type": "application/json",
  Key: process.env.KEY || "",
  Team: process.env.TEAM || "",
};
const chain = (option: "query" | "mutation") => Chain(URL, { headers })(option);

export const useBackend = () => {
  const createDialogue = () =>
    chain("query")({
      createBotDialogue: [
        { payload: { payload: "", role: DialogueRole.user } },
        true,
      ],
    });

  return { createDialogue };
};
