import { motion } from "framer-motion";

function FadeFragment({children}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {delay: 0, duration: 0.2} }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeFragment;