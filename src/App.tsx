import React, { Suspense } from "react";
// import FetchTodo from "./components/FetchTodo";
import TestTheme from "./components/TestTheme";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>{/* <FetchTodo /> */}</Suspense>
      <TestTheme />
    </React.Fragment>
  );
};

export default App;
