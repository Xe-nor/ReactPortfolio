import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "About", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      <div className="sidebar-header">header</div>
      {items.map((item) => (
        <motion.a
          href={`#${item}-container`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
          <div className="sidebar-socials"></div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
