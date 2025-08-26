import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm AzaniaBot, your AI assistant. How can I help you with your web development needs today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple AI responses based on keywords
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return "Our website development starts from R4,500 for basic sites and R8,500 for e-commerce stores. Would you like me to connect you with our pricing calculator for a detailed quote?";
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return "We offer comprehensive web development services including: Website Development, E-commerce Stores, Mobile Apps, Digital Marketing, SEO Optimization, and Custom Web Applications. Which service interests you most?";
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('how long')) {
      return "Project timelines vary: Basic websites (1-2 weeks), E-commerce stores (2-4 weeks), Custom applications (4-8 weeks). We'll provide exact timelines after understanding your specific requirements.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('phone')) {
      return "You can reach us at +27 78 651 1482 or email hello@azaniadigital.co.za. You can also use our WhatsApp chat or fill out our contact form for a quick response!";
    }
    
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('examples')) {
      return "We've completed 50+ successful projects including e-commerce platforms, corporate websites, and custom web applications. Check out our portfolio section to see our latest work and case studies!";
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return "We're based in South Africa and serve clients worldwide. We work remotely with clients across Cape Town, Johannesburg, Durban, and internationally.";
    }
    
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
      return "We use modern technologies including React, TypeScript, Node.js, MongoDB, Next.js, and more. We choose the best technology stack based on your specific project requirements.";
    }
    
    // Default response
    return "That's a great question! For detailed information about your specific needs, I'd recommend speaking with our team directly. You can contact us via WhatsApp, phone, or our contact form. Is there anything specific about our services you'd like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      width: '380px',
      height: '500px',
      background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 100%)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
          }}>
            🤖
          </div>
          <div>
            <h3 style={{ margin: 0, color: 'white', fontSize: '16px', fontWeight: '600' }}>
              AzaniaBot
            </h3>
            <p style={{ margin: 0, color: '#94A3B8', fontSize: '12px' }}>
              AI Assistant
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '5px'
          }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.isUser ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              maxWidth: '80%',
              padding: '12px 16px',
              borderRadius: message.isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              background: message.isUser 
                ? 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
                : 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              padding: '12px 16px',
              borderRadius: '18px 18px 18px 4px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '14px'
            }}>
              <div style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#0EA5E9',
                  animation: 'pulse 1.5s infinite'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#0EA5E9',
                  animation: 'pulse 1.5s infinite 0.2s'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#0EA5E9',
                  animation: 'pulse 1.5s infinite 0.4s'
                }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-end'
        }}>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            style={{
              flex: 1,
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '12px',
              color: 'white',
              fontSize: '14px',
              resize: 'none',
              minHeight: '20px',
              maxHeight: '80px'
            }}
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            style={{
              background: inputText.trim() 
                ? 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
                : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '12px',
              padding: '12px',
              color: 'white',
              cursor: inputText.trim() ? 'pointer' : 'not-allowed',
              fontSize: '16px'
            }}
          >
            📤
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
