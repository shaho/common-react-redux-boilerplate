export default function Shell({ children }) {
  return (
    <div className="bg-gradient-to-br from-teal-900 to-teal-800 px-6 sm:px-12 py-12 sm:py-24 h-screen w-screen flex flex-col">
      <div className="overflow-hidden border border-gray-200 border-opacity-75 rounded-md shadow container mx-auto h-full bg-gray-100">
        <div className="flex items-center justify-between w-full p-3 bg-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-300 border border-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-300 border border-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-300 border border-green-400 rounded-full"></div>
          </div>
        </div>

        <div className="w-full h-full overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
}
