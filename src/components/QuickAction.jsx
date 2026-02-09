export default function QuickAction({ label, Imagee }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl 
                    flex gap-10 items-center justify-center
                    py-6 cursor-pointer hover:shadow-md transition mb-15">

      <img src={Imagee} alt={label} className="h-25 w-auto " />

      <p className="text-3xl font-medium  text-center">
        {label}
      </p>
    </div>
  )
}
