export default function ChatAssistant() {
    return (
      <div className="w-100 flex flex-col items-center justify-center">
        {/* <img src="/Vector.png" alt="Logo" className="w-8 h-8" /> */}
        <h2 className="text-lg font-semibold py-4">Welcome to the AI Chat Assistant</h2>
        <input type="text" placeholder="Ask your question here..." className="border rounded px-3 bg-white py-1 w-100" />
      </div>
    );
  }
  