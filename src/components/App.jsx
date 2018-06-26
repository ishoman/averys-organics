import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Schedule from './Schedule';
import Produce from './Produce';

function App(){
  return (
    <div>
      <style jsx global>{`
        h1, h4 {
          animation: rotate 5s linear infinite;
        }

        ul, p {
          animation: rotate 1s linear infinite;
        }

        h3 {
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          0% {transform: rotate(0deg);}
          100% {transform: rotate(360deg);}
        }
      `}</style>
      <h1>Avery's Organics</h1>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Schedule}/>
        <Route path='/produce' component={Produce}/>
      </Switch>
    </div>
  );
}

export default App;
