import React from 'react';
import { FaGithubAlt, FaEnvelope, FaPhone, FaMapMarker, FaLinkedinIn } from 'react-icons/fa';

import Header from './components/Header';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

const skills = [
  { text: 'Sleeping', level: 'advanced' },
  { text: 'Running', level: 'beginner' },
  { text: 'Coding', level: 'intermediate' },
  { text: 'Speaking', level: 'intermediate' },
  { text: 'Listening', level: 'beginner' },
  { text: 'Driving', level: 'beginner' },
  { text: 'Eating', level: 'advanced' },
  { text: 'MS Word', level: 'beginner' },
];
const education = [
  {
    degree: 'PHD',
    university: 'Hogwartz',
    year: '2020 - present',
  },
];
const contacts = [

];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App--content">
        <div className="App--content-left">
          <Contacts/>
          <Education items={education} />
          <Skills items={skills} />
        </div>
        <div className="App--content-right">Main content</div>
      </main>
    </div>
  );
}

export default App;
