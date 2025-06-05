import Banner from "@components/Banner";
import FeedbackList from "@components/FeedbackList";
import TagAndSortSelectors from "@components/TagAndSortSelectors";

const Home = () => {
  return (
    <section className="flex flex-col gap-6">
      <Banner />
      <TagAndSortSelectors />
      <FeedbackList />
    </section>
  );
}

export default Home