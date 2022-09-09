import React from 'react';
import ContactList from './components/ContactList';

import './style.css';

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>

      <div id="container">
 <ContactList />
      </div>
    </div>
  );
}
