export function bindExclusiveVideoPlayback(videos) {
  const pauseOtherVideos = (event) => {
    const activeVideo = event.currentTarget;

    for (const video of videos) {
      if (video !== activeVideo) video.pause();
    }
  };

  videos.forEach((video) => video.addEventListener("play", pauseOtherVideos));

  return () => {
    videos.forEach((video) => video.removeEventListener("play", pauseOtherVideos));
  };
}
