import React from 'react';
import { render } from 'react-dom';

const root = document.querySelector('#root');

render(<hr />, root);

const run = async()=> {
  await console.log('hello');
};

run();
