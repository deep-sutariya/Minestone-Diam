import { motion } from "framer-motion";

function FadeFragment({children}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {delay: 0.2, duration: 0.5} }}
      viewport={{ once: true, amount: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeFragment;