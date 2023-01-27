import { Box } from "@mui/system";
import MLogo, { ALogo, NLogo, RLogo, ULogo } from "./logo";
import { motion } from "framer-motion";

export default function LogoAnimation() {
  return (
    <Box>
      <motion.path
        animate={{
          x: 0,
          y: 10,
        }}
        transition={{
          ease: "linear",
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <MLogo />
        <ALogo />
        <RLogo />
        <ULogo />
        <NLogo />
      </motion.path>
    </Box>
  );
}
