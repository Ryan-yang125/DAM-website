import React from "react";
import { useParams } from "react-router-dom";
export default function Userpage() {
  let { location } = useParams();
  return (
    <div>
      <p>hello{location}</p>
    </div>
  );
}
