import React from "react";

export default function Home() {
  return (
    <div className="home flex justify-center flex-wrap">
      <div className="dripping-image relative">
        <img className="trippy-home-img mt-10" src="/TrippyTrash2.png" />
      </div>
      <div className="flex justify-center">
        <p className="home-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
