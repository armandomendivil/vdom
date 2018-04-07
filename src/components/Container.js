function h(type, props, ...children) {
  return { type, props, children };
}

const Container = () => (
  <h3 onClick={() => console.log('EITS!')}>
    Title
  </h3>
);

export default Container;
