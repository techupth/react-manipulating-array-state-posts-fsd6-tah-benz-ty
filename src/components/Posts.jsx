import { useState } from "react";

function Posts() {
  const [likeCount, setLikeCount] = useState(10);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislikeClick = () => {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>Post Title #1</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{likeCount}</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={handleLikeClick}>
              Like
            </button>
            <button class="dislike-button" onClick={handleDislikeClick}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
