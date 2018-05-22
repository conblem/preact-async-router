import createStore, { put, get } from "saga.li";

const state = {
  count: 0
};

const sagas = {
  increment: function*() {
    const { count } = yield get();
    yield put({ count: count + 1 });
  }
};

const { StoreProvider, connect, actions } = createStore(state, sagas);

export { StoreProvider, connect, actions };
