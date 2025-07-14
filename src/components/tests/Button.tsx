import React from "react";
import { useFormStatus } from "react-dom";

const Buttton = () => {
  const { pending, action, method, data } = useFormStatus();
  console.log(action);
  console.log(method);
  console.log(data);

  return (
    <React.Fragment>
      <div className="!mt-12">
        <button
          type="submit"
          className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
          disabled={pending}
        >
          {pending ? "form submiting . . " : "Submit"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Buttton;
