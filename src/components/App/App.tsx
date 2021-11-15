import React from 'react';
import logo from '../../logo.svg';
import Calendar from '../Calendar';
import Recorder from '../Recorder';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder/>
      <Calendar/>
    </div>
  );
}

export default App;
