import { Profile } from './profile/Profile';
import user from './profile/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from './statistics/data.json';

import { FriendList } from 'components/friendList/FriendList';
import friends from './friendList/friends.json';

import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
