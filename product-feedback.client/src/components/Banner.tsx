const Banner = () => {
  return (
    <header className="flex justify-between items-center p-8 bg-blue-500 rounded-4xl text-blue-50">
      <div className="flex flex-col gap-2">
        <span className="material-symbols-rounded fill text-3xl!">emoji_objects</span>
        <p className="text-2xl font-medium">6 Suggestions</p>
      </div>
      <button className="flex items-center gap-2 text-blue-900 bg-blue-50 rounded-full px-6 py-4 cursor-pointer hover:shadow-md transition-all">
        <span className="material-symbols-rounded">add</span>Add Feedback
      </button>
    </header>
  );
}

export default Banner