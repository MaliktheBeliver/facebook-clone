# Facebook Clone 📱

A modern, responsive, and interactive Facebook UI clone built with **Next.js** and **React**. This project is perfect for junior developers looking to understand how to build complex UI layouts, manage state across components, and use CSS Modules in a Next.js App Router environment.

## 🌟 Features

- **Interactive Navigation**: Click through the top Navbar or Left Sidebar to instantly swap between different views (Home, Profile, Friends, Video, Marketplace, Groups, Gaming) without full page reloads.
- **Dynamic Feed**: Create new text posts and "Like" existing posts using React `useState`.
- **Modern Styling**: Built using pure CSS Modules, demonstrating how to create complex, responsive layouts (like CSS Grid and Flexbox) without relying on heavy UI libraries.
- **Optimized Images**: Utilizes the Next.js `<Image />` component for automatic image optimization and lazy loading.
- **Lucide Icons**: Beautiful, clean SVG icons integrated via `lucide-react`.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: CSS Modules (`.module.css`)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

Here's a quick overview of the important files so you can navigate the codebase easily:

```text
facebook/
├── app/
│   ├── page.js             # Main entry point. Manages the 'activeTab' state and renders content.
│   └── globals.css         # Global CSS variables (colors) and resets.
├── components/             # Reusable UI pieces
│   ├── Header.js           # Top navigation bar
│   ├── LeftSidebar.js      # Left navigation menu
│   ├── RightSidebar.js     # Friends list sidebar
│   ├── Feed.js             # Main timeline (handles post creation & likes)
│   ├── Profile.js          # User profile view
│   └── (Video, Marketplace, Groups, Gaming).js # Content views
└── next.config.mjs         # Next.js config (configured to allow Unsplash images)
```

## 🛠️ Getting Started

Follow these steps to get the project running on your local machine:

**1. Clone the repository**

```bash
git clone https://github.com/yourusername/facebook-clone.git
cd facebook-clone
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the development server**

```bash
npm run dev
```

**4. Open the app**
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result!

## 💡 Things to Learn from this Project

If you're studying this code, pay special attention to:

1. **State Lifting (`app/page.js`)**: Notice how the `activeTab` state lives in the parent component and is passed down as props (`activeTab`, `setActiveTab`) to the `Header` and `LeftSidebar` components so they can talk to each other.
2. **Conditional Rendering (`app/page.js`)**: Look at the `renderContent()` function to see how React swaps out entire page views based on a simple string state.
3. **CSS Modules**: Explore files like `Feed.module.css` to see how class names are scoped locally to prevent styling conflicts.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
