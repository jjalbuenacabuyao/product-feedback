import { useParams } from "react-router";

const Feedback = () => {
  const { id } = useParams();

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

  const feedback = feedbacks.find((feedback) => feedback.id === Number(id));
  return (
    <div>
      <p>{feedback?.id}</p>
      <p>{feedback?.title}</p>
      <p>{feedback?.description}</p>
    </div>
  );
};

export default Feedback;
