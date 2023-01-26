import { SvgIcon } from "@mui/material";
import { height, width } from "@mui/system";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.path
      animate={{
        x: 0,
        y: 10,
      }}
      transition={{ ease: "linear", duration: 0.8,repeat: Infinity, repeatType: "reverse" }}
    >
      <SvgIcon sx={{ width: 40, height: 40, overflow: "visible" }}>
        <g id="g1592" transform="translate(84.57146,4.9194745)">
          <path
            d="M 14,7.5 C 14,11.0899 11.0899,14 7.5,14 v 2 C 12.1944,16 16,12.1944 16,7.5 Z M 7.5,1 C 11.0899,1 14,3.91015 14,7.5 h 2 C 16,2.80558 12.1944,-1 7.5,-1 Z M 1,7.5 C 1,3.91015 3.91015,1 7.5,1 V -1 C 2.80558,-1 -1,2.80558 -1,7.5 Z M 7.5,14 C 3.91015,14 1,11.0899 1,7.5 H -1 C -1,12.1944 2.80558,16 7.5,16 Z M 10,7.5 C 10,8.88071 8.88071,10 7.5,10 v 2 C 9.98528,12 12,9.98528 12,7.5 Z M 7.5,5 C 8.88071,5 10,6.11929 10,7.5 h 2 C 12,5.01472 9.98528,3 7.5,3 Z M 5,7.5 C 5,6.11929 6.11929,5 7.5,5 V 3 C 5.01472,3 3,5.01472 3,7.5 Z M 7.5,10 C 6.11929,10 5,8.88071 5,7.5 H 3 C 3,9.98528 5.01472,12 7.5,12 Z"
            fill="#000000"
            mask="url(#path-1-inside-1_5_6)"
            transform="translate(-84.57146,-4.9194745)"
          />
        </g>
      </SvgIcon>
    </motion.path>
  );
}
