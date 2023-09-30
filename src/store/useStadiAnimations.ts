import { AnimationAction } from "three";
import { create } from "zustand";

type StadiStore = {
  stadiActions: { [key: string]: AnimationAction };
  initStadiAnimations: (actions: {
    [key: string]: AnimationAction | null;
  }) => void;
  playAction: (actionName: string) => void;
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

  const playAction = (actionName: string) => {
    const { stadiActions } = get();
    const action = stadiActions[actionName];
    if (action) action.play();
  };

  return {
    stadiActions: {},
    initStadiAnimations,
    playAction,
  };
});
