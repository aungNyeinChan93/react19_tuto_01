import React, { useState, useTransition } from "react";
import Home from "./Home";
import About from "./About";
import Post from "./Post";

const TestApp = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isPending, startTransition] = useTransition();

  const renderTab = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Post":
        return <Post />;
      default:
        return <Home />;
    }
  };

  const changeTab = (tab: "Home" | "About" | "Post") => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  if (isPending) {
    return <>Loading . . .</>;
  }

  return (
    <React.Fragment>
      <section>
        <button
          className="px-4 py-2 bg-indigo-500 rounded mx-2"
          type="button"
          onClick={() => changeTab("Home")}
        >
          Home
        </button>
        <button
          className="px-4 py-2 bg-indigo-500 rounded mx-2"
          type="button"
          onClick={() => changeTab("About")}
        >
          About
        </button>
        <button
          className="px-4 py-2 bg-indigo-500 rounded mx-2"
          type="button"
          onClick={() => changeTab("Post")}
        >
          Post
        </button>
      </section>

      <section className="p-4">{renderTab()}</section>
    </React.Fragment>
  );
};

export default TestApp;
