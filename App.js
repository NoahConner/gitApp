
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import Users from './src/components/users';

const App = () =>{
  return(
    <Provider store={store}>
      <Users/>
    </Provider>
  )
}

export default App;
