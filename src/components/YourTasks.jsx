
function TaskItem({ initials, color, tag, tagColor }) {
  return (
    <div className="flex items-start gap-4 px-6 py-4">
      
      {/* Avatar */}
      <div
        className={`h-15 w-15 rounded-full flex items-center justify-center 
                    text-sm font-medium ${color}`}
      >
        {initials}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-4xl font-semibold text-gray-900 my-2">
          Jefferson Partners LLC v. Astro Corp
        </p>

        <p className="text-2xl text-gray-500 my-2">
          Contract dispute regarding software licensing agreement
        </p>

        <p className="text-2xl text-gray-400 my-2">
          Assigned to: <span className="font-medium">Sarah Johnson</span>
          <span className="mx-2">•</span>
          Due: Nov 15, 2025
        </p>
      </div>

      {/* Tag */}
      <span
        className={`px-3 py-3 text-xl rounded-full whitespace-nowrap ${tagColor}`}
      >
        {tag}
      </span>
    </div>
  )
}export default function YourTasks() {
  return (
    <div className="bg-white border border-gray-400 rounded-xl">
      
      {/* Header (no underline) */}
      <div className="px-12 py-12 border-b-2 border-gray-400">
        <h3 className="font-semibold text-5xl text-black">Your Tasks</h3>
      </div>

      {/* Task List (no dividers) */}
      <div>
        <TaskItem
          initials="JP"
          color="bg-blue-100 text-blue-600"
          tag="Corporate"
          tagColor="bg-blue-100 text-blue-600"
        />
        <TaskItem
          initials="JP"
          color="bg-orange-100 text-orange-600"
          tag="Personal Injury"
          tagColor="bg-orange-100 text-orange-600"
        />
        <TaskItem
          initials="JP"
          color="bg-green-100 text-green-600"
          tag="Estate Planning"
          tagColor="bg-green-100 text-green-600"
        />
        <TaskItem
          initials="JP"
          color="bg-purple-100 text-purple-600"
          tag="Estate Planning"
          tagColor="bg-purple-100 text-purple-600"
        />
        <TaskItem
          initials="JP"
          color="bg-blue-100 text-blue-600"
          tag="Corporate"
          tagColor="bg-blue-100 text-blue-600"
        />
      </div>

      {/* Footer */}
      <div className="px-6 py-4 text-right mb-20">
        <button className="text-2xl text-blue-600 underline">
          View All Cases
        </button>
      </div>
    </div>
  )
}
