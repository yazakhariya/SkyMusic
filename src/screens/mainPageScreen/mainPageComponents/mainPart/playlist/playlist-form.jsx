import { React, useEffect, useState } from 'react';
import PlaylistLoading from './playlist-loading';
import PlaylistItem from './playlist-item-form';

function Playlist() {
    const TracksLoading = PlaylistLoading(PlaylistItem);
    const [trackState, setTrackState] = useState({
        loading: false,
        tracks: null,
    })

    useEffect(() => {
        setTrackState({ loading: true });
        const allTracks = 'https://painassasin.online/catalog/track/all/';
        fetch(allTracks)
        .then((response) => response.json())
        .then(tracks => {
            setTrackState({ loading: false, tracks: tracks });
        })
    }, []);

    return (
        <TracksLoading isLoading={trackState.loading} tracks={trackState.tracks} />
    );
}

export default Playlist;






    
    