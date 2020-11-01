import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>A HomePage</h1>
      <p>
        <Link to="/123">Your Link</Link>
      </p>
    </div>
  );
}
