import { motion } from "motion/react";

type Props = {
  active: boolean;
  expanded: boolean;
  label: string;
  icon: string;
};

const NavigationRailItem = ({ active, expanded, label, icon }: Props) => (
  <motion.a
    href="#"
    layout
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`flex items-center cursor-pointer ${
      expanded ? "flex-row gap-2 p-4 rounded-full" : "flex-col gap-1 py-1.5"
    } ${
      active && expanded
        ? "bg-blue-4 dark:bg-blue-a4 hover:bg-blue-5 dark:hover:bg-blue-a5"
        : ""
    } ${!active && expanded ? "hover:bg-blue-3 dark:hover:bg-blue-a3" : ""}`}
  >
    <span
      className={`material-symbols-rounded leading-0 px-4 py-1 rounded-full ${
        active ? "fill text-blue-9 dark:text-blue-dark-11" : ""
      } ${
        active && !expanded
          ? " bg-blue-4 dark:bg-blue-a4 hover:bg-blue-5 dark:hover:bg-blue-a5"
          : ""
      } ${expanded ? "px-0! py-0!" : ""} ${
        !active && !expanded ? "hover:bg-blue-3 dark:hover:bg-blue-a3" : ""
      }`}
    >
      {icon}
    </span>
    <span
      className={`font-medium text-xs tracking-wider whitespace-nowrap ${
        active ? "text-blue-9 dark:text-blue-dark-11" : ""
      }`}
    >
      {label}
    </span>
  </motion.a>
);

export default NavigationRailItem;
