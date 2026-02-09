export default function StatCard({
  title,
  value,
  change,
  changeType = "up", // "up" | "down"
  icon,
}) {
  return (
    <div className="bg-white mb-15 px-6 py-10 rounded-xl border border-gray-200 min-w-[260px]">

      {/* Icon + Content */}
      <div className="flex items-start gap-4 mb-3">
        
        {/* Icon */}
        <img src={icon} alt={title} className="h-25 w-auto mt-1" />

        {/* Text Content */}
        <div>
          <p className="text-3xl text-gray-800 mb-1">{title}</p>

          <h3 className="text-5xl font-semibold text-gray-900 leading-tight">
            {value}
          </h3>
        </div>
      </div>
      
          <p
            className={`mt-1 text-3xl flex items-center gap-1
              ${changeType === "up" ? "text-green-600" : "text-orange-500"}`}
          >
            {changeType === "up" ? "↑" : "↓"} {change}
          </p>
    </div>
  )
}
