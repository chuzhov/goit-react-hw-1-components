import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import userData from "../db/profile.json";
import userStatistics from "../db/statistics.json";
import friends from "../db/friends.json";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "../db/transactions.json";
import Footer from "./Footer/Footer";

export const App = () => {

  const { 
        avatar, 
        username, 
        tag, 
        location,
        stats  } = userData;

  return (
    <div>
      <Profile username = {username} tag = {tag} location = {location} avatar = {avatar} stats = {stats} />
      <Statistics title="Members of Sith Order" stats={userStatistics} />
      <FriendList friends={ friends } />
      <TransactionHistory transactions={ transactions } />
      <Footer />
    </div>
  );
};
