import { messages } from "../../../lib/data";

const Messages = () => {
  return (
    <section className="border border-gray-300 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-start gap-4 pb-4 border-b last:border-b-0 border-gray-200"
          >
            {message.unread && (
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            )}
            <div className="w-10 h-10 bg-gray-900 rounded-full flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-black">
                  {message.name}
                </h3>
                <span className="text-sm text-gray-500">{message.time}</span>
              </div>
              <p className="text-base text-gray-700">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Messages;
