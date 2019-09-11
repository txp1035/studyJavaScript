/**
 * redux是一个状态管理器，用于管理状态。它可以获取状态值、修改状态值。
 * 修改状态值后希望能够得到通知，所以需要用订阅发布模式来实现。
 * 将上个例子封装一下方便以后使用。需要用到订阅方法subscribe，改变状态方法changeState，获取状态方法getState。改变状态方法变得更通用
 */
function createStore(initSate) {
  let state = initSate || {};
  let listeners = [];
  function subscribe(listenner) {
    listeners.push(listenner);
  }
  function changeState(states) {
    state = states;
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
    changeState,
    getState
  };
}
//开始使用
const store = createStore({ count: 1 });
console.log(store.getState().count);
store.subscribe(() => {
  console.log(store.getState().count);
});
store.changeState({ count: 2 });
store.changeState({ count: 3 });
//缺陷可以随意修改state值
store.changeState('123');
