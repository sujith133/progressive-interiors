interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%", // 16:9
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "80%",
          height: "80%",
          border: 0,
          borderRadius: "12px",
          margin:"auto",
        }}
      />
    </div>
  );
};

export default YouTubePlayer;