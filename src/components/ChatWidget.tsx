import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import logo from '@/assets/logo.png';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickQuestions = [
    'What projects have you worked on recently?',
    'What technologies do you specialize in?',
    'Can you summarize your work experience?',
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-card border rounded-xl shadow-xl z-50 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-muted p-4 flex items-center gap-3">
            <img src={logo} alt="Assistant" className="w-10 h-10 rounded-lg" />
            <div>
              <h3 className="font-semibold text-sm">Ram's Portfolio Assistant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3">
            <div className="flex gap-2">
              <img src={logo} alt="Assistant" className="w-6 h-6 rounded-md flex-shrink-0" />
              <div className="chat-bubble chat-bubble-assistant">
                <p>Hello! I'm Ram's Portfolio Assistant. How can I help you?</p>
              </div>
            </div>
            <p className="text-xs text-center text-muted-foreground">04:04 AM</p>

            <p className="text-xs text-muted-foreground">Quick questions:</p>
            <div className="space-y-2">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  className="block w-full text-left text-xs p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm bg-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="p-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
