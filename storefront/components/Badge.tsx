import { badgeToneToClass } from "@/lib/catalog";
import { Badge as BadgeType } from "@/types/catalog";

type BadgeProps = {
  badge: BadgeType;
};

export function Badge({ badge }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${badgeToneToClass(
        badge.tone,
      )}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current/50" aria-hidden />
      {badge.label}
    </span>
  );
}

export function BadgeStack({ badges }: { badges: BadgeType[] }) {
  if (!badges.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <Badge badge={badge} key={badge.tag} />
      ))}
    </div>
  );
}
