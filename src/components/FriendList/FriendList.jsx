import PropTypes from "prop-types";
import FriendItem from "./FriendItem"
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    
    return (
        <section className="friends">
            <ul className={css["friend-list"]}>
                { friends.map(friend => (
                    <FriendItem key={friend.id}
                                avatar={friend.avatar} 
                                isOnline={friend.isOnline} 
                                name={friend.name} />
                    )
                )}
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        })
    )
}

export default FriendList;