/**
 * redux是一个状态管理器，用于管理状态。它可以获取状态值、修改状态值。
 * 修改状态值后希望能够得到通知，所以需要用订阅发布模式来实现。
 * 将上个例子封装一下方便以后使用。需要用到订阅方法subscribe，改变状态方法changeState，获取状态方法getState。改变状态方法变得更通用
 * 犹豫随意改造state值的缺陷，可以用以下方法解决。只能通过特定计划函数改变值，改变值只能使用这个函数
 * 把play函数缓存reducer，changeState函数换成dispatch，一个简单版本的redux就完成了
 * 一个reducer计划函数的话可能会对state的各个状态分开管理，所以系统能够把多个reducer组合成一个reducer函数,所以弄一个函数combineReducers来组装多个reducer
 * 由于拆分了reducer来写，所以state会添加很多，不好维护，希望state可以和reducer写一起。
 * 有时候想打印出发动作时间什么的。
 * 补全redux，可以退订,中间件只能使用getstore,省略init, replaceReducer
 */
function createStore(reducer, initSate, middleware) {
  if (typeof initSate === 'function') {
    middleware = initSate;
    initSate = undefined;
  }
  function replaceReducer(newReducer) {
    reducer = newReducer;
    dispatch({ type: Symbol() });
  }
  if (middleware) {
    const newstore = middleware(createStore);
    return newstore(reducer, initSate);
  }
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
  dispatch({ type: Symbol() });
  return {
    subscribe,
    replaceReducer,
    combineReducers,
    dispatch,
    getState
  };
}
function combineReducers(reducers) {
  /**
   * reducers:{a,b}
   */
  //生成reducerkey数组
  const keys = Object.keys(reducers);
  return function combination(state = {}, action) {
    const nextState = {};
    for (let index = 0; index < keys.length; index++) {
      //获取每个reducerkey
      const elementKey = keys[index];
      //获取当前reducer
      const reducer = reducers[elementKey];
      //获取当前reducer控制的状态的值
      const nowKey = state[elementKey];
      //得到处理后的状态
      const nextKey = reducer(nowKey, action);
      //重新给当前reducer的状态赋值
      nextState[elementKey] = nextKey;
    }
    return nextState;
  };
}
function applyMiddleware(...Middlewares) {
  return function createStore(oldCreatStore) {
    return function newCreatStore(reducer, initSate) {
      const store = oldCreatStore(reducer, initSate);
      let dispatch = store.dispatch;
      const newMiddlewares = Middlewares.map(item => item(store.getState()));
      newMiddlewares.reverse().forEach(item => [(dispatch = item(dispatch))]);
      store.dispatch = dispatch;
      return store;
    };
  };
}
//开始使用
const log3 = store => dispatch => action => {
  console.log(3);
  dispatch(action);
};

const reducer1 = (state, action) => {
  if (!state) {
    state = { count: 1 };
  }
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
};
const reducer2 = (state, action) => {
  if (!state) {
    state = { count: 2 };
  }
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
};
const reducer = combineReducers({ a: reducer1, b: reducer2 });
// const store = createStore(reducer);
//冲写
// const dispatch = store.dispatch;

let loger = store => next => action => {
  // console.log(store.getState());
  // console.log(action);
  console.log(1);
  next(action);
};

let loger2 = store => next => action => {
  console.log(2);
  next(action);
};
// loger = loger(store);
// loger2 = loger2(store);

// store.dispatch = loger2(loger(dispatch));
//xiwang
/*接收旧的 createStore，返回新的 createStore*/
const newCreateStore = applyMiddleware(loger, loger2, log3);

/*返回了一个 dispatch 被重写过的 store*/
// const store = newCreateStore(reducer);
const store = createStore(reducer, {}, newCreateStore);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: 'add' });
store.dispatch({ type: 'add' });
console.log(1233);
store.replaceReducer(reducer1);
store.dispatch({ type: 'add' });

store.dispatch({ type: 'add' });
