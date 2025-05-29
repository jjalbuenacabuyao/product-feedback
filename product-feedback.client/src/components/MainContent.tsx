import Banner from "./Banner"
import CategoryTags from "./CategoryTags"
import FeedbackList from "./FeedbackList"

const MainContent = () => {
  return (
    <section className="pr-4 flex flex-col gap-6 w-full max-w-5xl mx-auto">
      <Banner />
      <CategoryTags />
      <FeedbackList />
    </section>
  )
}

export default MainContent