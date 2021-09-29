import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/index'
import Profile from './components/Profile';

function render () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <Profile />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)
reportWebVitals();