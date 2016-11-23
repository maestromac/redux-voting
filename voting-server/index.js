import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SE_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({
  type: 'NEXT'
});
