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

type StadiStore = {
  stadiActions: {
    [key: string]: AnimationAction;
  };
  initStadiAnimations: (actions: {
    [key: string]: AnimationAction | null;
  }) => void;
  playAction: (actionName: StadiActions) => void;
  stopAction: (actionName: StadiActions) => void;
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

  return {
    stadiActions: {},
    initStadiAnimations,
    playAction,
    stopAction,
  };
});
