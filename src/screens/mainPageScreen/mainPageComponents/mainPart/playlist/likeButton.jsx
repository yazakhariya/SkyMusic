import { ReactSVG } from "react-svg";
import disliked from '../../../../img/icon/disliked.svg';
import like from '../../../../img/icon/liked.svg';
import { useState } from "react";
import s from './playlist-item-form.module.css';
import { useAddToFavoriteMutation } from '../../../../registrationForm/AuthApi';

export default function LikeButton({ likedItem, track }) {

    const [liked, setLiked] = useState(likedItem);

    const [addToFavorite] = useAddToFavoriteMutation();

    const handleButtonLike = (id, e) => {
        e.stopPropagation();
        addToFavorite(id);
        setLiked(true);
    }

    return (
        <div>
            <button className={s.button} onClick={(e) => handleButtonLike(track.id, e)} type="button" >
                {!liked
                    ? 
                    (<ReactSVG src={disliked} className={s.track__time_svg} alt="time" />)
                    :
                    (<ReactSVG src={like} className={s.track__time_svg} alt="time" />)
                }
            </button>
        </div>
    )
}
