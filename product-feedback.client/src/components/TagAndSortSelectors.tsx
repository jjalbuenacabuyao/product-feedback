import CategoryTags from "./CategoryTags";
import FeedbackSortSelect from "./FeedbackSortSelect";

const TagAndSortSelectors = () => {
  return (
    <div className="flex justify-between items-end">
      <CategoryTags />
      <FeedbackSortSelect />
    </div>
  );
};

export default TagAndSortSelectors;
