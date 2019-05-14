import { h } from 'preact'; // eslint-disable-line no-unused-vars
import Styles from './Counter.css';

const Counter = (props) => {
  const { count, onClickDecrement, onClickIncrement } = props;
  return (
    <div className={Styles.box}>
      <h1>{count}</h1>
      <div>
        <button
          type="button"
          onClick={onClickDecrement}
        >
          decrement
        </button>
        <button
          type="button"
          onClick={onClickIncrement}
        >
          increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
