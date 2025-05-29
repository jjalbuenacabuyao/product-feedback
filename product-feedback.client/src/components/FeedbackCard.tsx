type Feedback = {
  title: string;
  description: string;
  category: string;
  comments: number;
  upvotes: number;
};

type Props = {
  feedback: Feedback;
};

const FeedbackCard = ({ feedback }: Props) => {
  const { title, description, category, comments, upvotes } = feedback;
  return (
    <li className="p-6 shadow-md rounded-2xl grid grid-cols-[auto_1fr_auto] gap-6 items-start bg-white">
      <button type="button" className="flex flex-col bg-blue-100 p-2 rounded-xl text-sm min-w-12">
        <span className="material-symbols-rounded">keyboard_arrow_up</span>
        {upvotes}
      </button>
      <div className="grid gap-1.5">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm py-1 px-2 bg-blue-200 w-fit rounded-md font-medium text-blue-600 mt-1">{category}</p>
      </div>
      <p className="self-center flex gap-2">
        <span className="material-symbols-rounded text-gray-500">comment</span>
        {comments}
      </p>
    </li>
  );
};

export default FeedbackCard;
