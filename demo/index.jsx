import React from 'react'
import { render } from 'react-dom'
import Root from '../src/'
import "../src/index.scss"

render(
  <Root />,
  document.getElementById('rc-root')
);

//todo
if (module.hot) module.hot.accept();