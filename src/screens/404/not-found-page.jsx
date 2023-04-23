import error from './404g.gif';
import s from './not-found-page.module.css';

export const NotFound = () => {
    return (
        <div className={s.wrapper}>
            <img alt='Ошибка, страница не найдена. Page not found' className={s.error_img} src={error}/>
        </div>
    )
}