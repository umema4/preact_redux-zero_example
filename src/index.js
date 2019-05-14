import { h, render } from 'preact'; // eslint-disable-line no-unused-vars
import { Provider } from 'redux-zero/preact';
import store from './store';
import Counter from './containers/Counter';

const MainApp = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<MainApp />, document.getElementById('main'));
