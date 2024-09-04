import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AIAssistant = ({ onGenerateResponse }) => {
  const [codeInput, setCodeInput] = useState('');

  const handleGenerateResponse = () => {
    const aiResponse = `Here's a simulated AI response to your code:\n\n${codeInput}\n\nThis is a placeholder response. In a real AI system, this would be generated based on the input.`;
    onGenerateResponse(aiResponse);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">AI Assistant</h2>
      <Textarea
        placeholder="Enter your code here..."
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        className="mb-4"
        rows={10}
      />
      <Button onClick={handleGenerateResponse}>Generate Response</Button>
    </div>
  );
};

export default AIAssistant;