function EventItem({ time, title, titleColor, dotColor }) {
  return (
    <div>
      {/* Time */}
      <p className="text-4xl font-semibold text-black my-4 px-5">
        {time}
      </p>

      {/* Event */}
      <div className="flex items-start gap-4 px-6 " >
        
        {/* Circle Icon */}
        <div
          className={`h-10 w-10 rounded-full ${dotColor} 
                      flex items-center justify-center`}
        >
          <div className="h-5 w-5 bg-white rounded-full" />
        </div>

        {/* Details */}
        <div>
          <p className={` font-medium  text-2xl ${titleColor}`}>
            {title}
          </p>
          <p className="text-2xl text-gray-500">
            New-Trademark Filing | +3 Other team members
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ScheduleCard() {
  return (
    <div className="bg-white border border-gray-400 rounded-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-12 py-12 border-b-2 border-gray-400">
        <h3 className="text-5xl font-semibold text-black">
          15 Dec, Monday
        </h3>

        <div className="flex gap-2">
          <button className="h-12 w-12 rounded-full bg-blue-300  
                             flex items-center justify-center text-white">
            ◀
          </button>
          <button className="h-12 w-12 rounded-full bg-blue-300 
                             flex items-center justify-center text-blue-600">
            ▶
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-5 space-y-6">

        {/* Event 1 */}
        <EventItem
          time="2:00 PM - 3:30 PM"
          title="Team Meeting"
          titleColor="text-blue-600"
          dotColor="bg-blue-200"
        />

        {/* Event 2 */}
        <EventItem
          time="5:00 PM - 6:30 PM"
          title="Submission of Assignment"
          titleColor="text-green-600"
          dotColor="bg-green-200"
        />

        {/* See more */}
        <p className="text-center text-blue-600 text-3xl font-medium cursor-pointer">
          See More
        </p>
      </div>
    </div>
  )
}
