import React from "react";

const Post = () => {
  const posts = Array.from(
    { length: 100000 },
    (_, index) => `post ${index + 1}`
  );
  return (
    <React.Fragment>
      <section>Post Page</section>
      <div>
        {posts?.map((post) => {
          return <div key={post}>{post}</div>;
        })}
      </div>
    </React.Fragment>
  );
};

export default Post;
