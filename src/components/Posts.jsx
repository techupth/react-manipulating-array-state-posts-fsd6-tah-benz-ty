import postDatas from "./data";
import { useState } from "react";

function Posts() {
  const [post, setPost] = useState(postDatas);
  const handleLike = (index) => {
    const newPost = [...post];
    newPost[index].likes += 1;
    setPost(newPost);
  };
  const handleDislike = (index) => {
    const newPost = [...post];
    if (newPost[index].likes > 0) {
      newPost[index].likes -= 1;
      setPost(newPost);
    }
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {post.map((post, index) => (
          <div key={post.id} class="post-item">
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>

            <p class="post-content">{post.content}</p>
            <div class="post-actions">
              <button class="like-button" onClick={() => handleLike(index)}>
                Like
              </button>
              <button
                class="dislike-button"
                onClick={() => handleDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
