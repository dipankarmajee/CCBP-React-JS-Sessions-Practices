import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      {/* Render a YouTube video player */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls="true"
      />
    </div>
  </div>
)

export default VideoPlayer
