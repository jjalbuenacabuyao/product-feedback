import Header from "@components/Header";
import MainContent from "@components/MainContent";
import NavigationRail from "@components/NavigationRail";

const App = () => {
  return (
    <div className="h-dvh max-h-dvh overflow-hidden grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Header />
      <NavigationRail />
      <MainContent />
    </div>
  );
}

export default App