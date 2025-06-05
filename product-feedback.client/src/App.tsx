import Header from "@components/Header";
import NavigationRail from "@components/NavigationRail";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="h-dvh max-h-dvh overflow-hidden grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Header />
      <NavigationRail />
      <section className="pr-4 w-full max-w-5xl mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default App;
