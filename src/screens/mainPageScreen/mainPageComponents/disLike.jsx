import { ReactSVG } from "react-svg";
import disliked from '../../../screens/img/icon/disliked.svg';
import like from '../../../screens/img/icon/liked.svg';
import { useState } from "react";
import s from './mainPart/playlist/playlist-item-form.module.css';
import { useDeleteFavoriteMutation } from '../../registrationForm/AuthApi';

export default function DisLike({ likedItem, track }) {

    const [liked, setLiked] = useState(likedItem);

    const [deleteFavorite] = useDeleteFavoriteMutation();

    const handleButtonDislike = (id, e) => {
        e.stopPropagation();
        deleteFavorite(id);
        setLiked(false);
    }

  return (
        <div>
            <button className={s.button} onClick={(e) => handleButtonDislike(track.id, e)} type="button" >
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
