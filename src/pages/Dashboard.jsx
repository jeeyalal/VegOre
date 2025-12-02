// import { useState } from 'react';
// import { User, Calendar, TrendingUp, Award, Play, Pause, RefreshCw } from 'lucide-react';
// import BackButton from "../components/BackButton";
// export default function Dashboard() {
//   const [isPaused, setIsPaused] = useState(false);
//   const [completedDays, setCompletedDays] = useState([1, 2, 3, 5, 8, 10, 12, 15]);
//   const [currentStreak, setCurrentStreak] = useState(8);
//   const [totalDays, setTotalDays] = useState(15);

//   // Mock user data
//   const user = {
//     name: "John Doe",
//     joinDate: "Jan 2024",
//     level: "Veggie Warrior",
//     avatar: "JD"
//   };

//   // Generate 30 days for the tracker
//   const days = Array.from({ length: 30 }, (_, i) => i + 1);

//   const toggleDay = (day) => {
//     if (completedDays.includes(day)) {
//       setCompletedDays(completedDays.filter(d => d !== day));
//     } else {
//       setCompletedDays([...completedDays, day].sort((a, b) => a - b));
//     }
//   };

//   const handleSwap = () => {
//     alert('Swap feature - Switch to different plan or goal');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-14 px-6 pb-12">
//        <BackButton />
//       <div className="max-w-6xl mx-auto">
       
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Dashboard</h1>
//             <p className="text-gray-600">Track your vegetarian journey</p>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="flex gap-3">
//             <button
//               onClick={handleSwap}
//               className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-sm hover:shadow-md"
//             >
//               <RefreshCw size={18} />
//               Swap Plan
//             </button>
//             <button
//               onClick={() => setIsPaused(!isPaused)}
//               className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md ${
//                 isPaused
//                   ? 'bg-emerald-500 text-white hover:bg-emerald-600'
//                   : 'bg-amber-500 text-white hover:bg-amber-600'
//               }`}
//             >
//               {isPaused ? <Play size={18} /> : <Pause size={18} />}
//               {isPaused ? 'Resume' : 'Pause'}
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Main Content - Day Tracker */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-3 gap-4">
//               <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="p-2 bg-emerald-100 rounded-lg">
//                     <TrendingUp className="text-emerald-600" size={20} />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{currentStreak}</p>
//                 <p className="text-sm text-gray-600 mt-1">Day Streak</p>
//               </div>

//               <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="p-2 bg-blue-100 rounded-lg">
//                     <Calendar className="text-blue-600" size={20} />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{totalDays}</p>
//                 <p className="text-sm text-gray-600 mt-1">Total Days</p>
//               </div>

//               <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="p-2 bg-purple-100 rounded-lg">
//                     <Award className="text-purple-600" size={20} />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-800">{Math.round((completedDays.length / 30) * 100)}%</p>
//                 <p className="text-sm text-gray-600 mt-1">Complete</p>
//               </div>
//             </div>

//             {/* Day Tracker */}
//             <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800">30-Day Challenge</h2>
//                 {isPaused && (
//                   <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
//                     Paused
//                   </span>
//                 )}
//               </div>

//               <div className="grid grid-cols-6 sm:grid-cols-10 gap-3">
//                 {days.map((day) => {
//                   const isCompleted = completedDays.includes(day);
//                   return (
//                     <button
//                       key={day}
//                       onClick={() => toggleDay(day)}
//                       disabled={isPaused}
//                       className={`aspect-square rounded-xl font-semibold text-sm transition-all duration-300 ${
//                         isCompleted
//                           ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg scale-105 hover:scale-110'
//                           : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
//                       } ${isPaused ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center`}
//                     >
//                       {day}
//                     </button>
//                   );
//                 })}
//               </div>

//               <div className="mt-6 flex items-center gap-4 text-sm">
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 rounded bg-gradient-to-br from-emerald-500 to-green-600"></div>
//                   <span className="text-gray-600">Completed</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 rounded bg-gray-100"></div>
//                   <span className="text-gray-600">Pending</span>
//                 </div>
//               </div>
//             </div>

//             {/* Motivational Message */}
//             <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
//               <h3 className="text-xl font-bold mb-2">Keep Going! 🌱</h3>
//               <p className="text-emerald-50">
//                 You're doing amazing! Every green day is a step towards a healthier you and a better planet.
//               </p>
//             </div>
//           </div>

//           {/* Profile Sidebar */}
//           <div className="space-y-6">
//             {/* Profile Card */}
//             <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
//                   {user.avatar}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">{user.name}</h3>
//                 <p className="text-sm text-gray-600 mb-1">Member since {user.joinDate}</p>
//                 <div className="mt-3 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
//                   {user.level}
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Achievements</span>
//                   <span className="font-bold text-gray-800">12</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Recipes Tried</span>
//                   <span className="font-bold text-gray-800">38</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Friends</span>
//                   <span className="font-bold text-gray-800">25</span>
//                 </div>
//               </div>

//               <button className="w-full mt-6 px-4 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-sm hover:shadow-md">
//                 Edit Profile
//               </button>
//             </div>

//             {/* Weekly Goal Card */}
//             <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">Weekly Goal</h3>
//               <div className="space-y-3">
//                 <div>
//                   <div className="flex justify-between text-sm mb-2">
//                     <span className="text-gray-600">Progress</span>
//                     <span className="font-semibold text-emerald-600">5/7 days</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div 
//                       className="bg-gradient-to-r from-emerald-500 to-green-600 h-2.5 rounded-full transition-all duration-500"
//                       style={{ width: '71%' }}
//                     ></div>
//                   </div>
//                 </div>
//                 <p className="text-xs text-gray-600 mt-3">
//                   Complete 7 days this week to unlock the "Weekly Warrior" badge! 🏆
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




















import { useState } from 'react';
import { User, Calendar, TrendingUp, Award, Play, Pause, RefreshCw } from 'lucide-react';
import BackButton from "../components/BackButton";

export default function Dashboard() {
  const [isPaused, setIsPaused] = useState(false);
  const [completedDays, setCompletedDays] = useState([1, 2, 3, 5, 8, 10, 12, 15]);
  const [currentStreak, setCurrentStreak] = useState(8);
  const [totalDays, setTotalDays] = useState(15);

  // Mock user data
  const user = {
    name: "John Doe",
    joinDate: "Jan 2024",
    level: "Veggie Warrior",
    avatar: "JD"
  };

  // Generate 30 days for the tracker
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggleDay = (day) => {
    if (completedDays.includes(day)) {
      setCompletedDays(completedDays.filter(d => d !== day));
    } else {
      setCompletedDays([...completedDays, day].sort((a, b) => a - b));
    }
  };

  const handleSwap = () => {
    alert('Swap feature - Switch to different plan or goal');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-14 px-6 pb-12">

      <div className="max-w-6xl mx-auto">

        {/* HEADER SECTION */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">

          {/* Left Side: Back Button + Titles */}
          <div>
            <BackButton />

            <h1 className="text-4xl font-bold text-gray-800 mt-2">Your Dashboard</h1>
            <p className="text-gray-600">Track your vegetarian journey</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleSwap}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-sm hover:shadow-md"
            >
              <RefreshCw size={18} />
              Swap Plan
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md ${
                isPaused
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              {isPaused ? <Play size={18} /> : <Pause size={18} />}
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* Streak Card */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <TrendingUp className="text-emerald-600" size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">{currentStreak}</p>
                <p className="text-sm text-gray-600 mt-1">Day Streak</p>
              </div>

              {/* Total Days */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">{totalDays}</p>
                <p className="text-sm text-gray-600 mt-1">Total Days</p>
              </div>

              {/* Progress */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="text-purple-600" size={20} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">
                  {Math.round((completedDays.length / 30) * 100)}%
                </p>
                <p className="text-sm text-gray-600 mt-1">Complete</p>
              </div>
            </div>

            {/* DAY TRACKER */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">30-Day Challenge</h2>

                {isPaused && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                    Paused
                  </span>
                )}
              </div>

              <div className="grid grid-cols-6 sm:grid-cols-10 gap-3">
                {days.map((day) => {
                  const isCompleted = completedDays.includes(day);
                  return (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      disabled={isPaused}
                      className={`aspect-square rounded-xl font-semibold text-sm transition-all duration-300 ${
                        isCompleted
                          ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg scale-105 hover:scale-110'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                      } ${
                        isPaused ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                      } flex items-center justify-center`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-emerald-500 to-green-600"></div>
                  <span className="text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-100"></div>
                  <span className="text-gray-600">Pending</span>
                </div>
              </div>
            </div>

            {/* Motivational Box */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Keep Going! 🌱</h3>
              <p className="text-emerald-50">
                You're doing amazing! Every green day is a step towards a healthier you and a better planet.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
                  {user.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{user.name}</h3>
                <p className="text-sm text-gray-600 mb-1">Member since {user.joinDate}</p>

                <div className="mt-3 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  {user.level}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Achievements</span>
                  <span className="font-bold text-gray-800">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Recipes Tried</span>
                  <span className="font-bold text-gray-800">38</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Friends</span>
                  <span className="font-bold text-gray-800">25</span>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-sm hover:shadow-md">
                Edit Profile
              </button>
            </div>

            {/* Weekly Goal */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Weekly Goal</h3>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-emerald-600">5/7 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-green-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: '71%' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Complete 7 days this week to unlock the "Weekly Warrior" badge! 🏆
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
