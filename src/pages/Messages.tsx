import React from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const CONTACTS = [
  { id: 1, name: 'Sarah Jenkins', lastMessage: 'Thanks for the updated meal plan!', time: '10:42 AM', unread: 2, online: true },
  { id: 2, name: 'Michael Chen', lastMessage: 'Can we reschedule tomorrow?', time: 'Yesterday', unread: 0, online: false },
  { id: 3, name: 'Emma Davis', lastMessage: 'Hit a new PR on squats today 🏋️‍♀️', time: 'Yesterday', unread: 0, online: true },
  { id: 4, name: 'James Wilson', lastMessage: 'The new exercises feel great.', time: 'Monday', unread: 0, online: false },
];

export function Messages() {
  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Sidebar */}
      <div className="w-full max-w-sm border-r border-slate-200 flex flex-col bg-slate-50/50">
        <div className="p-4 border-b border-slate-200 bg-white">
          <h1 className="text-xl font-bold text-slate-900 mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-[#44674d] focus:ring-2 focus:ring-[#44674d]/20 transition-all outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CONTACTS.map((contact) => (
            <div 
              key={contact.id} 
              className={`p-4 border-b border-slate-100 cursor-pointer transition-colors flex items-start gap-3 ${contact.id === 1 ? 'bg-white border-l-4 border-l-[#44674d]' : 'hover:bg-slate-100 border-l-4 border-l-transparent'}`}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                  {contact.name.charAt(0)}
                </div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={`text-sm font-semibold truncate ${contact.id === 1 ? 'text-slate-900' : 'text-slate-700'}`}>{contact.name}</h3>
                  <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{contact.time}</span>
                </div>
                <p className={`text-sm truncate ${contact.unread ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                  {contact.lastMessage}
                </p>
              </div>
              {contact.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-[#44674d] text-white text-xs flex items-center justify-center font-bold">
                  {contact.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white hidden md:flex">
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                S
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Sarah Jenkins</h2>
              <p className="text-xs text-green-600 font-medium">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50">
          <div className="flex justify-center">
            <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Today</span>
          </div>
          
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-600 font-bold text-xs">
              S
            </div>
            <div>
              <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700">
                Hi Coach! I just finished the lower body workout. The new split squats are killer!
              </div>
              <span className="text-xs text-slate-400 mt-1 ml-1 block">10:30 AM</span>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-[#44674d] flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
              C
            </div>
            <div>
              <div className="bg-[#44674d] text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm">
                That's great to hear Sarah! Make sure you're focusing on the eccentric portion like we discussed. How did the weight feel?
              </div>
              <span className="text-xs text-slate-400 mt-1 mr-1 block text-right">10:35 AM</span>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-600 font-bold text-xs">
              S
            </div>
            <div>
              <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700">
                Felt challenging but manageable. I stuck to the 15kg dumbbells. Also, thanks for the updated meal plan!
              </div>
              <span className="text-xs text-slate-400 mt-1 ml-1 block">10:42 AM</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <div className="flex items-end gap-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 bg-slate-100 rounded-xl border border-transparent focus-within:bg-white focus-within:border-[#44674d] focus-within:ring-2 focus-within:ring-[#44674d]/20 transition-all">
              <textarea 
                rows={1}
                placeholder="Type your message..." 
                className="w-full bg-transparent border-none focus:ring-0 resize-none py-3 px-4 text-sm max-h-32 outline-none"
              />
            </div>
            <button className="p-3 bg-[#44674d] text-white rounded-xl hover:bg-[#385b42] transition-colors flex-shrink-0 shadow-sm">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
