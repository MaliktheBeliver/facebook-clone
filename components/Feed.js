"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MonitorPlay,
  Image as ImageIcon,
  UserPlus,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";
import styles from "./Feed.module.css";

export default function Feed({ userImage, dummyPostImage }) {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      userName: "John Doe",
      time: "1h · Public",
      content:
        "This is a sample post content for the Facebook clone. Just enjoying a beautiful day! 🌞",
      image: dummyPostImage,
      likes: 12,
      comments: 3,
      shares: 1,
      isLiked: false,
    },
    {
      id: 2,
      userName: "Jane Smith",
      time: "3h · Public",
      content: "Just finished a great workout! Feeling energized 💪",
      image: null,
      likes: 45,
      comments: 12,
      shares: 4,
      isLiked: true,
    },
  ]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const newPostObj = {
      id: Date.now(),
      userName: "John Doe",
      time: "Just now · Public",
      content: newPost,
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
    };

    setPosts([newPostObj, ...posts]);
    setNewPost("");
  };

  const toggleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  return (
    <section className={styles.feed}>
      {/* Stories */}
      <div className={styles.stories}>
        <div className={styles.story}>
          <Image
            src={userImage}
            alt="Create Story"
            width={112}
            height={200}
            className={styles.storyImg}
          />
          <div className={styles.storyName}>Create Story</div>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.story}>
            <Image
              src={`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=300&fit=crop&q=80&sig=${i}`}
              alt="Story"
              width={112}
              height={200}
              className={styles.storyImg}
            />
            <Image
              src={userImage}
              className={styles.storyUser}
              alt="User"
              width={40}
              height={40}
            />
            <div className={styles.storyName}>Friend {i}</div>
          </div>
        ))}
      </div>

      {/* Create Post */}
      <div className={styles.createPost}>
        <div className={styles.createPostTop}>
          <Image
            src={userImage}
            alt="Profile"
            width={40}
            height={40}
            className={styles.profilePic}
          />
          <form
            onSubmit={handlePostSubmit}
            style={{ flex: 1, display: "flex" }}
          >
            <input
              type="text"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind, John?"
              className={styles.createPostInput}
            />
          </form>
        </div>
        <div className={styles.createPostBottom}>
          <div className={styles.createPostAction}>
            <MonitorPlay color="#E53935" size={24} />
            <span>Live video</span>
          </div>
          <div className={styles.createPostAction}>
            <ImageIcon color="#43A047" size={24} />
            <span>Photo/video</span>
          </div>
          <div className={styles.createPostAction}>
            <UserPlus color="#FBC02D" size={24} />
            <span>Feeling/activity</span>
          </div>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.postHeader}>
            <div className={styles.postUser}>
              <Image
                src={userImage}
                alt="Profile"
                width={40}
                height={40}
                className={styles.profilePic}
              />
              <div className={styles.postUserInfo}>
                <span className={styles.postUserName}>{post.userName}</span>
                <span className={styles.postTime}>{post.time}</span>
              </div>
            </div>
            <div
              className={styles.iconBtn}
              style={{ background: "transparent" }}
            >
              <MoreHorizontal size={20} color="#65676b" />
            </div>
          </div>
          <div className={styles.postContent}>
            <p>{post.content}</p>
          </div>
          {post.image && (
            <Image
              src={post.image}
              alt="Post image"
              width={800}
              height={500}
              className={styles.postImage}
            />
          )}
          <div className={styles.postStats}>
            <span>👍 {post.likes}</span>
            <span>
              {post.comments} comments · {post.shares} shares
            </span>
          </div>
          <div className={styles.postActions}>
            <div
              className={`${styles.postAction} ${
                post.isLiked ? styles.postActionActive : ""
              }`}
              onClick={() => toggleLike(post.id)}
            >
              <ThumbsUp
                size={20}
                fill={post.isLiked ? "currentColor" : "none"}
              />
              <span>Like</span>
            </div>
            <div className={styles.postAction}>
              <MessageSquare size={20} />
              <span>Comment</span>
            </div>
            <div className={styles.postAction}>
              <Share2 size={20} />
              <span>Share</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
