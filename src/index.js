import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Provider } from 'react-redux'
import {store} from './redux/store';
import 'antd/dist/antd.css';
import './style/styles.scss';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)

