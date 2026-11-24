import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

class AppBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: false }; }
  static getDerivedStateFromError() { return { error: true }; }
  componentDidCatch(error) { console.error("MangaVerse render error:", error); }
  render() {
    if (this.state.error) return <main className="fatal"><div className="fatal-card"><div className="brand-mark">M</div><h1>MangaVerse hit a snag</h1><p>The page could not be rendered. Refresh the site or clear its cached data.</p><button onClick={() => location.reload()}>Reload MangaVerse</button></div></main>;
    return this.props.children;
  }
}
const root = document.getElementById("root");
if (root) createRoot(root).render(<React.StrictMode><AppBoundary><App /></AppBoundary></React.StrictMode>);
