export function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">V</span>
      </div>
      <span className={`ml-2 text-xl font-bold text-gray-900 ${className}`}>
        ViteLand
      </span>
    </div>
  );
}
