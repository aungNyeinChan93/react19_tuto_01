import React, { useActionState } from "react";

const TestActionState = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const increment = (prevState: any, formdata: any) => {
    console.log(formdata.get("test"));

    return prevState + 1;
  };
  const [state, actionstate] = useActionState(increment, 0);

  return (
    <React.Fragment>
      <section>
        <form action={actionstate}>
          {state}
          <input
            type="text"
            defaultValue={"this is test "}
            name="test"
            id="tests"
            className="hidden"
          />
          <button type="submit">Imcrement</button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default TestActionState;
