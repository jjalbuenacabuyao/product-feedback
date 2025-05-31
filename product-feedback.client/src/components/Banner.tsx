const Banner = () => {
  return (
    <header className="flex justify-between items-center p-8 bg-blue-9 dark:bg-blue-dark-9 rounded-4xl text-blue-1 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="material-symbols-rounded fill text-3xl!">emoji_objects</span>
        <p className="text-2xl font-medium">6 Suggestions</p>
      </div>
      <button className="flex items-center gap-2 text-blue-12 dark:text-blue-dark-1 bg-blue-1 dark:bg-blue-dark-12 rounded-full px-6 py-4 cursor-pointer hover:shadow-md dark:hover:shadow-gray-dark-7 transition-all">
        <span className="material-symbols-rounded">add</span>Add Feedback
      </button>
    </header>
  );
}

export default Banner