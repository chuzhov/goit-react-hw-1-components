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

export default FriendList;