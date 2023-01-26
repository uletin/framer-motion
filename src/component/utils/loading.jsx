import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

function Loading() {
  return (
    <Box sx={{ width: 200, height: 200, backgroundColor: "gray" }}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button>ayam</Button>
      </motion.button>
    </Box>
  );
}

export default Loading;

