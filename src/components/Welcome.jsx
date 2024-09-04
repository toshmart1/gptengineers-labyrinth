import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Welcome = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (input.trim()) {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome to GPTEngineer-like App</CardTitle>
            <CardDescription>Explore our AI-powered coding assistant</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This app provides an AI-powered coding assistant to help you with your programming tasks. 
              Try out our basic functionality below, or log in to access all features.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Sample AI Response:</p>
              <p>Hello! I'm your AI coding assistant. How can I help you today?</p>
            </div>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => navigate('/login')}>Log In</Button>
            <Button variant="outline" onClick={() => navigate('/signup')}>Sign Up</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;