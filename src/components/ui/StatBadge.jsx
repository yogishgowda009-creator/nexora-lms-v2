export default function StatBadge({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-[#8B8FA8]">
      <Icon size={13} />
      <span className="font-medium text-[#E8E9F3]">{value}</span>
      <span>{label}</span>
    </div>
  )
}
