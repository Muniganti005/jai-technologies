"use client";

import { useState } from "react";
import { Bot, Send, X } from "lucide-react";

type Message = {
  role: "bot" | "user";
  text: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi! I’m JAI AI Assistant. How can I help your business today?",
    },
  ]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const currentInput = input;

    const userMessage: Message = {
      role: "user",
      text: currentInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        role: "bot",
        text:
          data.reply ||
          "Thanks for your message. Our team can help with AI, cloud, software, and automation solutions.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="jai-chatbot">
      {open && (
        <div className="jai-chat-window">
          <div className="jai-chat-header">
            <div>
              <strong>JAI AI Assistant</strong>
              <span>Online • AI Powered</span>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="jai-chat-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "bot"
                    ? "jai-bot-message"
                    : "jai-user-message"
                }
              >
                {message.text}
              </div>
            ))}

            {loading && (
              <div className="jai-bot-message">
                Typing...
              </div>
            )}
          </div>

          <div className="jai-chat-input">
            <input
              value={input}
              placeholder="Ask about services..."
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage} disabled={loading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button className="jai-chat-button" onClick={() => setOpen(!open)}>
        <Bot size={30} />
      </button>
    </div>
  );
}