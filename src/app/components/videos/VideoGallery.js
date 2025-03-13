"use client";

import React, { useState, useEffect } from "react";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Hard-coded API key and channel ID
    const API_KEY = "AIzaSyD2ZkhAbR5JFPMWZ3Q8QXaTHL7yNB0CduI";
    const CHANNEL_ID = "UCRHMhVXEsPtTQ60dkxg8VXw"; // Replace with the Capgemini channel ID

    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=viewCount&type=video&part=snippet&maxResults=10`
      );
      const data = await response.json();
      setVideos(data.items);
    };

    fetchVideos();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          style={{
            textAlign: "center",
            background: "#f9f9f9",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <h3 style={{ fontSize: "16px", color: "#333" }}>
            {video.snippet.title}
          </h3>
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
