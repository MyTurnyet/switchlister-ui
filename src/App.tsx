import React from 'react';
import './App.css';
import { Train } from './models/Train';
import { TrainCard } from './components/TrainCard';

function App() {
  const expectedNames: string[] = ['station 1', 'station 2'];
  const trainName = 'test name';
  const train = new Train(trainName, expectedNames);

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <TrainCard train={train} />
        </div>
      </header>
    </div>
  );
}

export default App;
