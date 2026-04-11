export default function KeyTakeaway({ text, large = false }) {
  return (
    <div
      className={`rounded-r-lg border-l-2 border-[#6C63FF] bg-[#1A1B2E] ${large ? 'px-6 py-5' : 'px-4 py-3'} mt-4`}
    >
      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#6C63FF]">
        Key Takeaway
      </p>
      <p className={`leading-relaxed text-[#8B8FA8] ${large ? 'text-sm' : 'text-sm'}`}>
        {text}
      </p>
    </div>
  )
}
