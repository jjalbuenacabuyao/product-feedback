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
      expanded
        ? "flex-row gap-2 p-4 rounded-full hover:bg-blue-100"
        : "flex-col gap-1 py-1.5"
    } ${active && expanded ? "bg-blue-200 hover:bg-blue-200" : ""}`}
  >
    <span
      className={`material-symbols-rounded leading-0 px-4 py-1 rounded-full ${
        active ? "fill text-blue-500 dark:text-blue-400" : ""
      } ${active && !expanded ? " bg-blue-200" : "hover:bg-blue-100 dark:hover:bg-blue-300"} ${
        expanded ? "px-0! py-0!" : ""
      }`}
    >
      {icon}
    </span>
    <span
      className={`font-medium text-xs tracking-wider whitespace-nowrap ${
        active ? "text-blue-500 dark:text-blue-400" : ""
      }`}
    >
      {label}
    </span>
  </motion.a>
);

export default NavigationRailItem;
