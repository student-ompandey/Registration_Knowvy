"use client";

import { STATUS_META, type CityStatus } from "@/app/heygen/data";

export function StatusChip({
  status,
  cityOrder,
}: {
  status: CityStatus;
  cityOrder?: number;
}) {
  const meta = STATUS_META[status];
  const Icon = meta.icon;
  const accentTone =
    status === "dates-soon" && cityOrder
      ? `var(--c${cityOrder})`
      : meta.tone;

  return (
    <span
      className="u-label-sm inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5"
      style={{
        color: accentTone,
        borderColor: `color-mix(in oklab, ${accentTone} 30%, transparent)`,
      }}
    >
      <span className={meta.pulse ? "u-pulse" : ""}>
        <Icon size={11} />
      </span>
      {meta.label}
    </span>
  );
}
