import { InventoryStatus } from "@/types/catalog";

type StatusPillProps = {
  status: InventoryStatus;
};

export function StatusPill({ status }: StatusPillProps) {
  const tone =
    status.mood === "atelier"
      ? "bg-amber-50 text-amber-900 border-amber-200"
      : "bg-sage-50 text-sage-900 border-sage-200";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current/70 animate-pulse-soft" />
      <div className="flex flex-col leading-tight">
        <span>{status.headline}</span>
        <span className="text-[11px] font-normal opacity-70">
          {status.helper}
        </span>
      </div>
    </div>
  );
}
