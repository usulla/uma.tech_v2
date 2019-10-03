import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/sass/style.scss';
import App from './components/App/App.jsx';

ReactDOM.render(
		<App />, document.getElementById('root'));