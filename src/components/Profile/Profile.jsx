import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ( {avatar, username, tag, location, stats: {followers, views, likes}} ) => {

    return ( <div className={css.profile}>
        <div className={css["description"]}>
            <div className={css["image-wrapper"]}>
                <img
                src={avatar}
                alt="User avatar"
                className={css["avatar"]}
                />
            </div>
            <p className={css["name"]}>{username}</p>
            <p className={css["tag"]}>@{tag}</p>
            <p className={css["location"]}>{location}</p>
        </div>

        <ul className={css["stats"]}>
            <li className={css["stats__item"]}>
            <span className={css["label"]}>Followers</span>
            <span className={css["quantity"]}>{followers}</span>
            </li>
            <li className={css["stats__item"]}>
            <span className={css["label"]}>Views</span>
            <span className={css["quantity"]}>{views}</span>
            </li>
            <li className={css["stats__item"]}>
            <span className={css["label"]}>Likes</span>
            <span className={css["quantity"]}>{likes}</span>
            </li>
        </ul>
        </div>
  )
}

Profile.propTypes = {
    
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    stats: PropTypes.shape({
    followers: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    views: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired, 
    likes: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,})
}

export default Profile;
