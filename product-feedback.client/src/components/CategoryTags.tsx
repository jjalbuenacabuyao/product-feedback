const CategoryTags = () => {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <div className="flex flex-col gap-2">
      <h1 className="flex gap-2">
        <span className="material-symbols-rounded">category</span>
        <span className="font-medium">Categories</span>
      </h1>
      <ul className="flex items-center gap-2">
        {categories.map((category, index) => (
          <li key={category}>
            <button
              className={`text-sm py-1 px-4 rounded-md border ${
                index === 0
                  ? "bg-blue-500 text-blue-50 font-medium border-blue-500"
                  : "border-gray-300"
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
