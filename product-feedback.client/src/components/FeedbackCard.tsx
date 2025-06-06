import { Link } from "react-router";

type Feedback = {
  id: number;
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
  const { id, title, description, category, comments, upvotes } = feedback;

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the link navigation:
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <li className="shadow-md rounded-2xl bg-white dark:bg-gray-dark-3">
      <Link
        to={`/${id}`}
        className="group p-6 grid grid-cols-[auto_1fr_auto] gap-6 items-start"
      >
        <button
          type="button"
          className="peer flex flex-col bg-blue-3 dark:bg-blue-a3 p-2 rounded-xl text-sm min-w-12 cursor-pointer"
          onClick={handleUpvote}
        >
          <span className="material-symbols-rounded">keyboard_arrow_up</span>
          {upvotes}
        </button>
        <div className="grid gap-1.5">
          <h1 className="text-xl font-medium group-hover:text-blue-500 peer-hover:!text-gray-12">
            {title}
          </h1>
          <p className="text-sm text-gray-11 dark:text-gray-dark-11">
            {description}
          </p>
          <p className="text-sm py-1 px-2 bg-blue-3 dark:bg-blue-a3 w-fit rounded-md font-medium text-blue-11 dark:text-blue-dark-11 mt-1">
            {category}
          </p>
        </div>
        <p className="self-center flex gap-2">
          <span className="material-symbols-rounded text-gray-10 dark:text-gray-dark-10">
            comment
          </span>
          {comments}
        </p>
      </Link>
    </li>
  );
};

export default FeedbackCard;
