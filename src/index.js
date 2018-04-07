import { render } from '../vdom';
import Container from './components/Container';

function h(type, props, ...children) {
  return { type, props, children };
}

const Main = (
  <div style="">
    <Container />
  </div>
);

const $root = document.getElementById('app');

render($root, Main);
