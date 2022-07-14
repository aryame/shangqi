import './App.css';
import React, { Fragment } from 'react'
import Line from './pages/line'
import Pie from './pages/pie'
import Alert from './pages/alert'
import 'antd/dist/antd.css';

function App() {

  return (
    <Fragment>
      <div className="App">
        <Line />
        <Pie />
      </div>
      <Alert />
    </Fragment>
  );
}

export default App;
