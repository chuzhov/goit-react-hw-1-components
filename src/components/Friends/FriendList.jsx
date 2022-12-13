import FriendItem from "./FriendItem"

const FriendList = ({ friends }) => {
    
    const friendListMarkup = friends.map(friend => 
        <FriendItem key={friend.id}
                    avatar={friend.avatar} 
                    sOnline={friend.isOnline} 
                    name={friend.name} />
        );
    return (
        <section className="friends">
            <ul className="friend-list">
                {friendListMarkup}
            </ul>
        </section>
    )
}

export default FriendList;