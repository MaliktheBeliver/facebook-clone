"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";
import Video from "../components/Video";
import Marketplace from "../components/Marketplace";
import Groups from "../components/Groups";
import Gaming from "../components/Gaming";
import Profile from "../components/Profile";
import Friends from "../components/Friends";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const userImage =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop";
  const dummyPostImage =
    "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=800&q=80";

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Feed userImage={userImage} dummyPostImage={dummyPostImage} />;
      case "video":
        return <Video />;
      case "marketplace":
        return <Marketplace />;
      case "groups":
        return <Groups />;
      case "gaming":
        return <Gaming />;
      case "profile":
        return <Profile userImage={userImage} dummyPostImage={dummyPostImage} />;
      case "friends":
        return <Friends userImage={userImage} />;
      default:
        return <Feed userImage={userImage} dummyPostImage={dummyPostImage} />;
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header userImage={userImage} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className={styles.main}>
        {/* Left Sidebar */}
        <LeftSidebar userImage={userImage} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Center Content */}
        {renderContent()}

        {/* Right Sidebar */}
        <RightSidebar userImage={userImage} />
      </main>
    </div>
  );
}
