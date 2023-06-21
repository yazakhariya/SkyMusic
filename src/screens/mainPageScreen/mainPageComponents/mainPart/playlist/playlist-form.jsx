import PlaylistLoading from './playlist-loading';
import PlaylistItem from './playlist-item-form';

function Playlist({search, isLoading, data, setIsPlaying}) {
    

    return ( 
        <div>
            {isLoading ? <PlaylistLoading /> : <PlaylistItem setIsPlaying={setIsPlaying} search={search} tracks={data}/> }
        </div>
    )
}

export default Playlist;






    
    