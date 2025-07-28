import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const appDOM = document.getElementById('App');
const root = ReactDOM.createRoot(appDOM);
const button1 = React.createElement('button', { 'data-id': 123 }, 'Button 1');
const button2 = React.createElement('button', { 'data-id': 456 }, 'Button 2');
const button3 = React.createElement('button', { 'data-id': 789 }, 'Button 3');

const frag = React.createElement(React.Fragment, null, [button1, button2, button3]);
root.render(frag);
