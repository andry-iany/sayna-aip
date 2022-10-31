import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 120,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8,
    },
  },
};

type Props = {
  children: ReactNode;
  amount?: number;
};

const AnimateOnView = (props: Props) => {
  const { children, amount = 0.8 } = props;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
};

export default AnimateOnView;
