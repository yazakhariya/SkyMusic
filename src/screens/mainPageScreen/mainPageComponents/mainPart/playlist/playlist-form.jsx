import PlaylistLoading from './playlist-loading';
import PlaylistItem from './playlist-item-form';

function Playlist({ search, isLoading, data, setIsPlaying, setActive }) {
    

    return ( 
        <div>
            {isLoading ? <PlaylistLoading /> : <PlaylistItem setActive={setActive} setIsPlaying={setIsPlaying} search={search} tracks={data}/> }
        </div>
    )
}

export default Playlist;






    
    