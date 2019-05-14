import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Connect } from 'redux-zero/preact';

import Counter from '../components/Counter';
import actions from '../actions';

const mapToProps = ({ count }) => ({ count });

const Container = () => (
  <Connect mapToProps={mapToProps} actions={actions}>
    {({ count, increment, decrement }) => (
      <Counter
        count={count}
        onClickIncrement={increment}
        onClickDecrement={decrement}
      />
    )}
  </Connect>
);

export default Container;
