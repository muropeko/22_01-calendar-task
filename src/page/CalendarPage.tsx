export const CalendarPage = () => {
  return (
    <div className="h-screen overflow-hidden flex gap-10 p-10">

      <div className="flex-1 bg-white overflow-hidden p-5 flex flex-col min-h-0">

        <div className="flex flex-col items-center gap-2 pb-5">
          <button className="px-4 py-1 rounded bg-[#B489DE] text-white text-sm">
            Today
          </button>

          <div className="flex items-center gap-5">
            <button className="text-[#B489DE] text-2xl">‹</button>
            <h1 className="text-2xl font-semibold text-gray-700">April 2023</h1>
            <button className="text-[#B489DE] text-2xl">›</button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-7 bg-[#B489DE] text-white text-sm font-medium">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <div key={day} className="py-2 text-center">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 border-t border-l border-gray-300">
            {Array.from({ length: 42 }).map((_, i) => (
              <div
                key={i}
                className="h-20 border-b border-r border-gray-300 p-1 flex flex-col"
              >
                <span className="text-xs text-gray-600 self-end">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-120 flex flex-col max-h-screen gap-4">

        <div className="flex gap-3 justify-center">
          <button className="px-6 py-4 bg-[#FF8B00] text-white font-bold">MONTH</button>
          <button className="px-6 py-4 bg-white text-black font-bold">WEEK</button>
        </div>

        <div className="flex flex-col flex-1 min-h-0">

          <div className="flex justify-between items-center px-5 py-6">
            <h1 className="text-4xl text-white">Wednesday</h1>
            <span className="text-gray-400">12 April 2023</span>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-3 px-3">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 border border-white/10"
              >
                <div>
                  <h2 className="font-semibold text-2xl text-white">Подія</h2>
                  <p className="text-gray-400 text-sm">11 April 14:24 – 12 April 15:24</p>
                </div>

                <div className="flex gap-2">
                  <button className="rounded-full bg-[#B489DE] w-10 h-10 text-white">+</button>
                  <button className="rounded-full bg-[#B489DE] w-10 h-10 text-white">−</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-10">
            <button className="rounded-full bg-[#B489DE] w-12 h-12 text-white">+</button>
          </div>

        </div>
      </div>
    </div>
  );
};
