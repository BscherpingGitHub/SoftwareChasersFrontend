import "bootstrap/dist/css/bootstrap.min.css";
require("./VideoBox.css");

function VideoBox() {
  return (
    <div class="iframeWrapper">
      <p class="videoHeader">
        The inspiration for this website comes from this Numberphile video.
      </p>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/KdZrxkix9Mk"
        title="A number NOBODY has thought of - Numberphile"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBox;
