// {React.cloneElement({...props}.children, {...props})}

import React from 'react';
import FriendsView from 'features/friends/components/FriendsView';

const App = () => (
  <div className="page-container">
    <FriendsView />
  </div>
);

export default App;
