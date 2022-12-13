import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import userData from "../db/profile.json";
import userStatistics from "../db/statistics.json";
import friends from "../db/friends.json";
import FriendList from "./Friends/FriendList";
import TransactionTable from "./Transactions/TransactionTable";
import transactions from "../db/transactions.json";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile user = { userData } />
      <Statistics title="Members of Sith Order" stats={userStatistics} />
      <FriendList friends={ friends } />
      <TransactionTable transactions={ transactions } />
    </div>
  );
};
