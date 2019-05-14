export default () => ({
  decrement: state => ({ count: state.count - 1 }),
  increment: state => ({ count: state.count + 1 }),
});
