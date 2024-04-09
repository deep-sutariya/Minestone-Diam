import { motion } from "framer-motion";

function TranslateFragment({x=0, y=0, children}) {
    const xval = Number(x);
    const yval = Number(y);
  return (
    <motion.div
      initial={{ x: xval, y: yval }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default TranslateFragment;