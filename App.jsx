import React from "react";

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderWidth: 1,
  display: "flex", // corrected 'displays' to 'display'
  flexDirection: "column",
  alignItems: "center",
  padding: 10
};

function PostComponent() {
  return (
    <div style={style}>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/026/525/162/small_2x/lion-animal-isolated-photo.jpg"
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          objectFit: "cover"
        }}
        alt="Lion"
      />
      <div style={{ fontSize: 20, margin: 10 }}>
        <b>100xdevs</b>
        <div>hi there1</div>
        <div>hi there2</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: "red", padding: 20 }}>
      <div style={{ display: "flex", gap: 20 }}>
        <div>
          <PostComponent />
          <br />
          <PostComponent />
          <br />
        </div>
      </div>
    </div>
  );
}