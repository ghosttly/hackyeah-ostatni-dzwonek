import { AnimationAction } from "three";
import { create } from "zustand";

export type StadiActions =
  | "Dance"
  | "Death"
  | "Idle"
  | "Jump"
  | "No"
  | "Punch"
  | "Running"
  | "Sitting"
  | "Standing"
  | "ThumbsUp"
  | "WalkJump"
  | "Walking"
  | "Wave"
  | "Yes";

export const ArrayOfStadiActions: StadiActions[] = [
  "Dance",
  "Death",
  "Idle",
  "Jump",
  "No",
  "Punch",
  "Running",
  "Sitting",
  "Standing",
  "ThumbsUp",
  "WalkJump",
  "Walking",
  "Wave",
  "Yes",
];

type StadiStore = {
  conversationId?: string;
  stadiActions: {
    [key: string]: AnimationAction;
  };
  initStadiAnimations: (actions: {
    [key: string]: AnimationAction | null;
  }) => void;
  playAction: (actionName: StadiActions) => void;
  stopAction: (actionName: StadiActions) => void;
  setConversationId: (conversationId: string) => void;
};

export const useStadiStore = create<StadiStore>()((set, get) => {
  const initStadiAnimations = (
    actions: Record<string, AnimationAction | null>
  ) => {
    set(() => ({
      stadiActions: Object.fromEntries(
        Object.entries(actions).filter(([, action]) => action)
      ) as Record<string, AnimationAction>,
    }));
  };

  const playAction = (actionName: StadiActions) => {
    const { stadiActions } = get();
    const action = stadiActions[actionName];
    if (action) action.play();
  };

  const stopAction = (actionName: StadiActions) => {
    const { stadiActions } = get();
    const action = stadiActions[actionName];
    if (action) action.stop();
  };
  const setConversationId = (conversationId: string) => {
    set(() => ({ conversationId }));
  };
  return {
    stadiActions: {},
    initStadiAnimations,
    playAction,
    stopAction,
    setConversationId,
    conversationId: undefined,
  };
});
