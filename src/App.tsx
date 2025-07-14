import React, { Suspense } from "react";
// import FetchTodo from "./components/FetchTodo";
// import TestTheme from "./components/TestTheme";
import TestLogin from "./components/tests/TestLogin";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>{/* <FetchTodo /> */}</Suspense>
      {/* <TestTheme /> */}
      <TestLogin />
    </React.Fragment>
  );
};

export default App;
