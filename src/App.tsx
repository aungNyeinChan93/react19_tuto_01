import React, { Suspense } from "react";
import TestActionState from "./components/tests/TestActionState";
// import Counter from "./features/counter/components/Counter";
// import Counter from "./features/counter/components/Counter";
// import Motion from "./components/tests/Motion";
// import TestMotion from "./components/tests/TestMotion";
// import Counter from "./components/tests/Counter";
// import MasterLayout from "./layouts/MasterLayout";
// import TestBanner from "./components/tests/TestBanner";
// import Counter from "./components/tests/Counter";
// import TestApp from "./components/tests/TestApp";
// import Counter from "./components/tests/Counter";
// import FetchTodo from "./components/FetchTodo";
// import TestTheme from "./components/TestTheme";
// import TestLogin from "./components/tests/TestLogin";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>{/* <FetchTodo /> */}</Suspense>
      {/* <TestTheme /> */}
      {/* <TestLogin /> */}
      {/* <Counter /> */}
      {/* <TestApp /> */}
      {/* <MasterLayout>
        <TestBanner />
      </MasterLayout> */}

      {/* <Motion>
        <TestMotion />
      </Motion> */}

      {/* <Counter /> */}
      <TestActionState />
    </React.Fragment>
  );
};

export default App;
