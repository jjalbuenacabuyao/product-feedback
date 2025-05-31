const CategoryTags = () => {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <div className="flex flex-col gap-2">
      <h1 className="flex gap-2">
        <span className="material-symbols-rounded">category</span>
        <span className="font-medium text-lg">Categories</span>
      </h1>
      <ul className="flex items-center gap-2">
        {categories.map((category, index) => (
          <li key={category}>
            <button
              className={`text-sm py-1 px-4 rounded-md border ${
                index === 0
                  ? "bg-blue-9 dark:bg-blue-dark-9 text-blue-1 font-medium border-blue-9 dark:border-blue-dark-9"
                  : "border-gray-6 dark:border-gray-dark-6 bg-white dark:bg-blue-a2"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTags;
