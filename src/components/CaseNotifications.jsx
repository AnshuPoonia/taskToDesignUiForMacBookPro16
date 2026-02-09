
function NotificationItem({ title, titleColor }) {
  return (
    <div className="flex justify-between items-start">

      {/* Left content */}
      <div>
        <p className={` text-3xl font-medium ${titleColor}`}>
          {title}
        </p>

        <p className="text-2xl text-gray-500 my-2">
          Client Name | Assigned at: 12 June 2024
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-700 my-2">
          {/* You can replace with icon */}
          <span>📅</span>
          <span className="font-medium text-xl">Sat. 25 June</span>
        </div>
      </div>

      {/* Three dots */}
      <button className="text-blue-600 text-3xl leading-none">
        •••
      </button>
    </div>
  )
}
export default function CaseNotifications() {
  return (
    <div className="bg-white border border-gray-400 rounded-xl">

      {/* Header */}
      <div className="px-12 py-12 border-b-2 border-gray-400">
        <h3 className="text-5xl font-semibold text-black">
          Case Notifications
        </h3>
      </div>

      {/* Notifications */}
      <div className="px-6 py-5 space-y-6">

        {/* Notification 1 */}
        <NotificationItem
          titleColor="text-blue-600"
          title="New Task Assigned"
        />

        {/* Notification 2 */}
        <NotificationItem
          titleColor="text-orange-500"
          title="New Task Assigned"
        />

      </div>
    </div>
  )
}