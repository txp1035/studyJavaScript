/**
 * redux是一个状态管理器，用于管理状态。它可以获取状态值、修改状态值。
 * 修改状态值后希望能够得到通知，所以需要用订阅发布模式来实现。
 * 将上个例子封装一下方便以后使用。需要用到订阅方法subscribe，改变状态方法changeState，获取状态方法getState。改变状态方法变得更通用
 * 犹豫随意改造state值的缺陷，可以用以下方法解决。只能通过特定计划函数改变值，改变值只能使用这个函数
 * 把play函数缓存reducer，changeState函数换成dispatch，一个简单版本的redux就完成了
 */
function createStore(reducer, initSate) {
  let state = initSate || {};
  let listeners = [];
  function subscribe(listenner) {
    listeners.push(listenner);
  }
  function dispatch(action) {
    state = reducer(state, action);
    for (let index = 0; index < listeners.length; index++) {
      const listenner = listeners[index];
      listenner();
    }
  }
  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState
  };
}
//开始使用
const store = createStore(
  (state, action) => {
    const obj = {
      ...state
    };
    switch (action.type) {
      case 'add':
        obj.count += 1;
        break;

      default:
        break;
    }
    return obj;
  },
  { count: 1 }
);
console.log(store.getState().count);
store.subscribe(() => {
  console.log(store.getState().count);
});
store.dispatch({ type: 'add' });
store.dispatch({ type: 'add' });
store.dispatch({ type: 'add' });
