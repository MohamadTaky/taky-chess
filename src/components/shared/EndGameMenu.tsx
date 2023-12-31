"use client";

import Button from "@/components/shared/Button";
import useStore from "@/store/useStore";
import { AnimatePresence, motion } from "framer-motion";

type EndGameMenuProps = {
  handleEndGame: () => void;
};

export default function EndGameMenu({ handleEndGame }: EndGameMenuProps) {
  const endGameStatus = useStore((store) => store.endGameStatus);
  return (
    <AnimatePresence>
      {endGameStatus !== "none" && (
        <motion.div
          key="end-game-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mx-auto w-fit space-y-2"
        >
          <p>{endGameStatus === "draw" ? "draw" : `${endGameStatus} player won`}</p>
          <Button className="mx-auto" onClick={handleEndGame}>
            Play again
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
