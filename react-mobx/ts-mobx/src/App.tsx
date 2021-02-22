import React from 'react';
import logo from './logo.svg';
import './App.css';
import { inject, observer, useObserver } from "mobx-react";

import {store} from './Store'

// @observer 
// class App extends React.Component<{}, {}> {
//    render() {
//      return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//            {store.age}
//         </p>
//         <button onClick={() => store.addAge()}>나이먹음</button>
//       </header>
//     </div>
//      );
//    }
// }

function App() {
  return useObserver(() => (
   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             {store.age}
          </p>
          <button onClick={() => store.addAge()}>나이먹음</button>
        </header>
      </div>
   
  ))
}

export default App;
