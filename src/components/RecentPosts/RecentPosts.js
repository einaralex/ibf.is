import React from "react";
import PropTypes from "prop-types";
import styles from "./RecentPosts.module.scss";
import PostCard, { FeaturedPostCard } from "../PostCard";

function truncate(maxChars = 100) {
  if (this.length <= maxChars) {
    return this;
  }
  const subString = this.substr(0, maxChars - 1);
  return subString.substr(0, subString.lastIndexOf(" ")) + "...";
}

const RecentPosts = ({ posts: _posts, maxPosts = 5 }) => {
  if (!_posts || !Array.isArray(_posts)) {
    return null;
  }

  const posts = _posts.slice(0, maxPosts);

  return (
    <div className={styles.root}>
      <div className={styles.featured}>
        {posts
          .filter(post => post.isFeatured)
          .slice(0, 1)
          .map(post => (
            <FeaturedPostCard
              title={post.title}
              text={truncate.apply(post.text)}
              imageUrl={post.image}
              date={post.date}
              isFeatured
            />
          ))}
      </div>
      <div className={styles.posts}>
        {posts.filter(post => !post.isFeatured).map(post => (
          <PostCard
            title={post.title}
            text={truncate.apply(post.text)}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

RecentPosts.propTypes = {};

export default RecentPosts;