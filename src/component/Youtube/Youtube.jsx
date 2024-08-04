import { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

export default function Youtube() {

    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
    const [videos, setVideos] = useState([]);

    const channelId = "UC-9-kyTW8ZkZNDHQJ6FgpwQ";
    const apiKey = "AIzaSyDQlKUnJwvexLpxyqdF-ODsx6VbR0n51Og";

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=50&key=${apiKey}`
            )
            .then((res) => {
                setPlaylists(res.data.items);
            })
            .catch(() => { });
    }, [channelId, apiKey]);
    console.log(playlists)

    useEffect(() => {
        if (selectedPlaylistId) {
            axios
                .get(
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${selectedPlaylistId}&maxResults=50&key=${apiKey}`
                )
                .then((res) => {
                    console.log(res);
                    setVideos(res.data.items);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [selectedPlaylistId, apiKey]);

    return (
        <>
            <div className="playlists">
                {playlists.map((playlist, idx) => (
                    <div className="playlist" key={idx}>
                        <img src={playlist.snippet.thumbnails.high.url} alt={playlist.snippet.title} />
                        <h1>{playlist.snippet.title}</h1>
                        <p>트랙 {playlist.contentDetails?.itemCount + '개' || '정보 없음'}</p>
                        <p onClick={() => setSelectedPlaylistId(playlist.id)}>재생 목록 보기</p>
                    </div>
                ))}
            </div>
            <div className="videos">
                {videos.map((video, idx) => (
                    <div className="video" key={idx}>
                        <YouTube videoId={video.snippet.resourceId.videoId} />
                        <h1>{video.snippet.title}</h1>
                    </div>
                ))}
            </div>
        </>
    );
}