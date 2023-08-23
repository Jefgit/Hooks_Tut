import { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(1);
  const [idFromButtonClick, setidFromButtonClick] = useState(1);

  const handleClick = () => {
    setidFromButtonClick(postId);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const title = <p key={posts.id}>{posts.title}</p>;

  return (
    <div>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={handleClick}>Get Title</button>
      {title}
    </div>
  );
};

export default DataFetching;
