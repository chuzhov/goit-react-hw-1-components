import PropTypes from "prop-types";
import css from "./FriendList.module.css"


const GalleryItem = ( { 
    avatar = "http://www.stardestroyer.net/wiki/images/e/e1/Galactic_empire_emblem.png", 
    isOnline, 
    name } ) => {

    const statusColor = isOnline ? "green" : "red"; 

    return <li className={css["item"]}>
        <span className={css["status"]} style={{backgroundColor: statusColor}}></span>
        <div className={css["avatar-wrapper"]}>
            <img className={css["avatar"]} src={avatar} alt={name +" avatar"}/>
        </div>
        <p className={css["name"]}>{name}</p>
    </li>
}

GalleryItem.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

export default GalleryItem;
    