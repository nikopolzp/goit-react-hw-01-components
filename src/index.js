import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Profile } from 'components/profile/Profile';
import user from './components/profile/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from './components/statistics/data.json';

import { FriendList } from 'components/friendList/FriendList';
import friends from 'components/friendList/friends.json';

import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList />
      <TransactionHistory />
    </App>
  </React.StrictMode>
);
