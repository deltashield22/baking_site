import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
