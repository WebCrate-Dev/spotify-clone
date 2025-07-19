export default function Index() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/music-app.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        title="Music Streaming App"
      />
    </div>
  );
}
