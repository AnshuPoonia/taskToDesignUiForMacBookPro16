import Clock from "../assets/Icon/Clock.png";
import Play from "../assets/Icon/Play.png";
import Stop from "../assets/Icon/Stop.png";
import settings from ".././assets/Icon/setting.png";
import bell from ".././assets/Icon/bell.png";
import SearchIcon from ".././assets/Icon/Search.png";
import Profile from ".././assets/Icon/Profile.png";
export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-10 mb-10 bg-gray-100">
      {/* Left Section */}
      <div>
        <h2 className="text-6xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-3xl text-gray-500 mt-1">
          Hi, Praneesh. What are your plans for today?
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        {/* Search */}

        <div className="relative w-[560px]">
          {/* Search Icon */}
          <img
            src={SearchIcon}
            alt="Search"
            className="absolute left-4 top-1/2 -translate-y-1/2 
               h-8 w-8  pointer-events-none"
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border border-black
               py-4 pl-12 pr-4 text-2xl
               focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time Tracker */}
        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border text-xs text-start">
          <img src={Clock} alt="Clock Icon" className="w-[20%] h-auto" />
          <div>
            <p className="text-black  text-lg">Time Tracker</p>
            <p className="font-semibold text-sm text-blue-600">08:40:10</p>
          </div>
        </div>

        {/* Start / Stop */}
        <div className="flex items-center gap-4 bg-white rounded-xl border  px-6 py-2">
          <button
            className="flex items-center justify-center gap-2 px-4 py-3 
                     bg-blue-600 text-white rounded-md text-xl font-medium"
          >
            <img src={Play} alt="Play Icon" className="w-4 h-4" />
            <span>Start</span>
          </button>

          <button
            className="flex items-center justify-center gap-2 px-4 py-3 
                     bg-gray-100 text-gray-800 rounded-md text-xl font-medium"
          >
            <img src={Stop} alt="Stop Icon" className="w-4 h-4" />
            <span>Stop</span>
          </button>
        </div>

        {/* Invite Button */}
        <button className="px-5 py-5 bg-gray-300 rounded-md text-3xl font-semibold">
          + Invite New Client
        </button>

        {/* Register Button */}
        <button className="px-5 py-5 bg-blue-600 text-white rounded-md text-3xl font-semibold">
          + Register New Client
        </button>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button className="h-9 w-9  flex items-center justify-center">
            <img src={bell} alt="Bell Icon" className="w-8 h-8" />
          </button>
          <button className="h-9 w-9  flex items-center justify-center">
            <img src={settings} alt="Settings Icon" className="w-8 h-8" />
          </button>
        </div>

        {/* Profile */}
        <button
          className="h-20 w-20 rounded-full bg-blue-100 
                   flex items-center justify-center"
        >
          <img
            src={Profile}
            alt="Profile"
            className="h-10 w-10 object-contain"
          />
        </button>
      </div>
    </div>
  );
}
