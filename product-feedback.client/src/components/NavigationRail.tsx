import { useState } from "react";
import NavigationRailItem from "./NavigationRailItem";
import { AnimatePresence, motion } from "motion/react";

const NavigationRail = () => {
  const [expanded, setExpanded] = useState(false);

  const iconVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      rotate: direction > 0 ? 45 : -45,
    }),
    animate: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      opacity: 0,
      rotate: direction > 0 ? -45 : 45,
      transition: { duration: 0.1, ease: "easeInOut" },
    }),
  };

  return (
    <motion.nav
      layout
      initial={{ width: expanded ? 224 : 96 }}
      animate={{ width: expanded ? 224 : 96 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`h-full relative flex flex-col px-5 overflow-hidden`}
    >
      <button
        type="button"
        className="p-4 rounded-full absolute top-0 left-5 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-150 leading-0"
        onClick={() => setExpanded(!expanded)}
      >
        <AnimatePresence mode="wait" custom={expanded ? -1 : 1}>
          {expanded ? (
            <motion.span
              key="menu_open"
              custom={-1}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="material-symbols-rounded"
            >
              menu_open
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              custom={1}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="material-symbols-rounded"
            >
              menu
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <ul
        className={`h-full flex flex-col gap-1 pt-16 ${
          expanded ? "items-start" : "items-stretch"
        }`}
      >
        <li>
          <NavigationRailItem active expanded={expanded} label="Home" icon="home" />
        </li>
        <li>
          <NavigationRailItem
            active={false}
            expanded={expanded}
            label="Roadmap"
            icon="route"
          />
        </li>
      </ul>
    </motion.nav>
  );
}

export default NavigationRail