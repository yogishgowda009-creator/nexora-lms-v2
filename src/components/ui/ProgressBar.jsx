export default function ProgressBar({ percent = 0 }) {
  return (
    <div className="mt-4">
      <div className="mb-1 flex justify-end">
        <span className="text-xs text-[#4A4D6A]">{percent}% complete</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-[#252637]">
        <div
          className="h-1 rounded-full bg-[#6C63FF] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
