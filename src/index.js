import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './Containers/App';

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById("root"));
};

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF");
  console.log(store.getState());
}

render();
store.subscribe(render)
