import React from 'react';
import './App.css';
import { Train } from './models/Train';
import { TrainGrid } from './components/TrainGrid';

function App() {
  const train1 = new Train('Local Express', ['station 1', 'station 2']);
  const train2 = new Train('Another Train', ['station 14', 'station 2', 'station 21']);

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <TrainGrid trains={[train1, train2]} />
        </div>
      </header>
    </div>
  );
}

export default App;
