import FeedbackCard from "./FeedbackCard";

const FeedbackList = () => {
  const feedbacks = [
    {
      id: 0,
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on specific stack.",
      category: "UI",
      comments: 2,
      upvotes: 112,
    },
    {
      id: 1,
      title: "Add dark theme option",
      description:
        "It would help people with light sensitiveness and who prefer dark mode.",
      category: "Feature",
      comments: 4,
      upvotes: 99,
    },
  ];
  return (
    <ul className="grid gap-3">
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default FeedbackList;
