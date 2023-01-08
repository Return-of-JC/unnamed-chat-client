import { render } from 'solid-js/web';
import { LoginComponent } from './components/moecules/login';

import './index.scss'

function HelloWorld() {
  let button = LoginComponent();
  return button;
}


render(() => <HelloWorld />, document.getElementById('root'));
