import React from 'react';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">GPTEngineer-like App</h1>
      </header>
      <main className="flex-grow p-4">
        <ChatInterface />
      </main>
    </div>
  );
};

export default Index;