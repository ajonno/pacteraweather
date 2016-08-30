'use strict';

import 'styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import Index from 'components/Index/Index';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as WindowsAzure from 'azure-mobile-apps-client';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Index items={[1,2,3]}/>
  </MuiThemeProvider>
);



render(
    <App />, 
    document.getElementById('js-main')
);
