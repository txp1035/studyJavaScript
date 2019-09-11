/**
 * redux是一个状态管理器，用于管理状态。它可以获取状态值、修改状态值。
 * 修改状态值后希望能够得到通知，所以需要用订阅发布模式来实现。
 */
let state = {
  conut: 1
};
let listeners = [];
function subscribe(listenner) {
  listeners.push(listenner);
}
function changeState(count) {
  state.conut = count;
  for (let index = 0; index < listeners.length; index++) {
    const listenner = listeners[index];
    listenner();
  }
}
//开始使用
console.log(state.conut);
//添加一个订阅
subscribe(() => {
  console.log(state.conut);
});
//修改count值
changeState(2);
changeState(3);
//输出1 2 3
