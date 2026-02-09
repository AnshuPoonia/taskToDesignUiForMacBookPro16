function MessageBubble({ name, color }) {
  const styles = {
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-50",
      icon: "💬",
    },
    orange: {
      text: "text-orange-500",
      bg: "bg-orange-50",
      icon: "💭",
    },
  }

  return (
    <div>
      {/* Sender */}
      <p className={`text-3xl font-medium flex items-center gap-2 ${styles[color].text}`}>
        <span>{styles[color].icon}</span>
        Message from {name}
      </p>

      {/* Bubble */}
      <div className={`mt-2 p-4  mx-20 rounded-md text-2xl ${styles[color].bg}`}>
        <p className="font-medium">Hi,</p>
        <p className="mt-1 text-gray-900">
          Hope you are doing well, this is to update you that I have finished
          first installment of payment. Please proceed with the task as discussed.
        </p>
      </div>
    </div>
  )
}

export default function MessagePaymentUpdate() {
  return (
    <div className="bg-white border border-gray-400 rounded-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-12 py-12 border-b-2 border-gray-400">
        <h3 className="font-semibold text-black text-5xl ">
          Message | Payment Update
        </h3>

        <div className="flex items-center gap-3 text-blue-600">
          <button className="h-12 w-12 rounded-full bg-blue-300  
                             flex items-center justify-center text-white">
            ◀
          </button>
          <button className="h-12 w-12 rounded-full bg-blue-300 
                             flex items-center justify-center text-blue-600">
            ▶
          </button>
          <button className="text-4xl leading-none">•••</button>
        </div>
      </div>

      {/* Messages */}
      <div className="px-6 py-5 space-y-5">

        {/* Message 1 */}
        <MessageBubble
          name="Anurag"
          color="blue"
        />

        {/* Message 2 */}
        <MessageBubble
          name="Rahul"
          color="orange"
        />

      </div>
    </div>
  )
}
