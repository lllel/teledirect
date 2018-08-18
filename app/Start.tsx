import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from '../core/redux/store/store';
import App from "./app/pages/app/App";

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.querySelector('#application'));
