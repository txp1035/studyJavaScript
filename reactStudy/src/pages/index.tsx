import React from 'react';
import { createStore, combineReducers } from 'redux';
function Index(prop: any) {
  console.log('开始');
  const reducer = combineReducers({
    a: () => {
      return {};
    },
    b: () => {
      return { a: 1 };
    }
  });
  const store = createStore(reducer);
  console.log(store.getState());
  return <div>学习react</div>;
}
export default Index;
