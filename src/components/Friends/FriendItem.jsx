import css from "./FriendList.module.css"

const GalleryItem = ( { avatar, isOnline, name } ) => {

    return <li className={css["item"]}>
        <span className={css["status"]}>{isOnline}</span>
        <div className={css["avatar-wrapper"]}>
            <img className={css["avatar"]} src={avatar} alt={name +" avatar"}/>
        </div>
        <p className={css["name"]}>{name}</p>
    </li>
}

export default GalleryItem;
    