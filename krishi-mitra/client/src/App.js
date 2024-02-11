import React, { useState, useEffect } from 'react';
import UrlInput from './components/UrlInput';
import ChatInterface from './components/ChatInterface';
import "./App.css";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Experts from "./pages/Experts";
import Form from "./components/Form";



function App() {
  const [showChat, setShowChat] = useState(false); // Add state to control UI transition

  const handleUrlSubmitted = () => {
    setShowChat(true); // Transition to the ChatInterface
  };

  useEffect(() => {
    // This effect will run when the component is unmounted (page refresh or navigating to a new page)
    return () => {
      fetch('http://localhost:5000/delete-index', {
        method: 'POST',
      })
        .then((response) => {
          if (!response.ok) {
            console.error('Error deleting index:', response.statusText);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  }, []);

  return (
   <div>
    <div className="App">
      
      {!showChat ? (
        <UrlInput onSubmit={handleUrlSubmitted} />
      ) : (
        
        <ChatInterface />
        
      )}
    </div>

    {/* <Routes>
        <Route path="/" element={< Landing />} />
        <Route path="/Experts" element={<Experts />} />
        <Route path="/forms" element={<Form/>} />
      </Routes> */}

</div>

  );
}

export default App;