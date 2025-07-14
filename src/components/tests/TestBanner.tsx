import React, { useState } from "react";

const TestBanner = () => {
  const [image, setImage] = useState<string>(
    "data:image/jpeg;base64,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"
  );

  const changeImage = (e: any) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  return (
    <React.Fragment>
      <section className="w-full h-[300px] p-4">
        <img
          src={image}
          alt="banner-img"
          className="w-100 h-60 object-cover p-2"
        />
        {/* <button type="button" id="change Image">Change image</button> */}
        <label
          htmlFor="change Image"
          className=" cursor-pointer p-3 text-red-500"
        >
          Change Image
        </label>
        <input
          type="file"
          id="change Image"
          className="hidden"
          onChange={changeImage}
        />
      </section>
    </React.Fragment>
  );
};

export default TestBanner;
