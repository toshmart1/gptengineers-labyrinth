import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';
import AIAssistant from '../components/AIAssistant';
import Welcome from '../components/Welcome';

const Index = () => {
  const [aiResponse, setAIResponse] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSendMessage = (message) => {
    console.log('User message:', message);
    // In a real app, this would send the message to a backend for processing
  };

  const handleGenerateResponse = (response) => {
    setAIResponse(response);
  };

  if (!isLoggedIn) {
    return <Welcome />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-indigo-200">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">GPTEngineer-like App</h1>
      </header>
      <main className="flex-grow p-4 flex space-x-4">
        <div className="w-1/2">
          <ChatInterface onSendMessage={handleSendMessage} aiResponse={aiResponse} />
        </div>
        <div className="w-1/2">
          <AIAssistant onGenerateResponse={handleGenerateResponse} />
        </div>
      </main>
    </div>
  );
};

export default Index;