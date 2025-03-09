import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');

  const conversations = [
    {
      name: 'Alex Chen',
      lastMessage: 'When will my order arrive?',
      time: '2m ago',
      unread: 2,
    },
    {
      name: 'Sarah Miller',
      lastMessage: 'Thanks for the quick response!',
      time: '1h ago',
      unread: 0,
    },
    {
      name: 'Mike Johnson',
      lastMessage: 'The product is amazing!',
      time: '3h ago',
      unread: 1,
    },
  ];

  return (
    <div className="h-[calc(100vh-7rem)]">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm h-full flex">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100%-5rem)]">
            {conversations.map((conv) => (
              <div
                key={conv.name}
                className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">{conv.name}</h3>
                  <span className="text-xs text-gray-500">{conv.time}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{conv.lastMessage}</p>
                {conv.unread > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full">
                    {conv.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Alex Chen</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Online</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {/* Messages would go here */}
            <div className="flex flex-col space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg py-2 px-4 max-w-xs">
                  Hello! How can I help you today?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg py-2 px-4 max-w-xs">
                  I have a question about my recent order
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;