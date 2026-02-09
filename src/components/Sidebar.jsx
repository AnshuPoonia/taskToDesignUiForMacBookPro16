import React from 'react';
import Logo from '.././assets/Icon/Logo.png'


export default function Sidebar() {
  const items = [
    "Dashboard",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
  ]

  return (
    <aside className="w-[15%] bg-slate-900 text-slate-200 min-h-screen p-4 border-r-4 rounded-r-4xl">
      <div className="mb-30 mt-15 flex items-center justify-center">
        <img src={Logo} alt="LOGO" className='w-[50%] h-auto' />
      </div>

      <nav className="space-y-2 text-4xl">
        {items.map((item, i) => (
          <div
            key={i}
            className={`px-15 py-8 rounded-xl cursor-pointer ${
              i === 0
                ? "bg-slate-800 text-white "
                : "hover:bg-slate-800"
            }`}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  )
}
