import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import  Header  from './components/Header';
import ArticleList from './components/ArticleList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style= {{flex: 1}}>
        <Header headerText="Tech Stack" />
        <ArticleList />
      </View>
    </Provider>
  );
};

export default App;
