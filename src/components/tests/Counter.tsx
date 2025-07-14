import React, { useActionState } from "react";

const Counter = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function increment(prevState: any, formData: any) {
    //   const name = formData.get("name");
    //   console.log(name);
    console.log(formData.get("name"));

    prevState = prevState + 1;
    return prevState;
  }

  const [state, formAction, isPending] = useActionState(increment, 0);
  return (
    <React.Fragment>
      <section>
        <form>
          <span>{state}</span>
          <input title="name" type="text" name="name" id="name" />
          <button disabled={isPending} type="submit" formAction={formAction}>
            +
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Counter;
