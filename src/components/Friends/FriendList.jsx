import PropTypes from "prop-types";
import FriendItem from "./FriendItem"
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    
    const friendListMarkup = friends.map(friend => 
        <FriendItem key={friend.id}
                    avatar={friend.avatar} 
                    isOnline={friend.isOnline} 
                    name={friend.name} />
        );
    return (
        <section className="friends">
            <ul className={css["friend-list"]}>
                {friendListMarkup}
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.shape({
        key: PropTypes.number.isRequired,
        //the rest of keys are checking in FriendItem module.
})
}

export default FriendList;