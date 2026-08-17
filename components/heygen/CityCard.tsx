"use client";

import { type CSSProperties } from "react";
import type { City } from "@/app/heygen/data";
import { StatusChip } from "./StatusChip";
import { MapPin } from "lucide-react";

export function CityCard({
  city,
  onClick,
  compact = false,
}: {
  city: City;
  onClick: () => void;
  compact?: boolean;
}) {
  const style = { "--accent": `var(--c${city.order})` } as CSSProperties;

  return (
    <button
      id={`city-${city.slug}`}
      onClick={onClick}
      className={`u-card group flex scroll-mt-36 flex-col text-left overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        city.status === "done" ? "opacity-70 grayscale-[.35]" : ""
      } ${compact ? "p-3" : "p-4 sm:p-5"}`}
      style={style}
    >
      {/* City Photo with Name Overlay */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-2">
        <img
          src={city.image}
          alt={`${city.name} - ${city.landmark}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Scrim gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

        {/* Order Chip */}
        <span
          className="u-label-sm absolute top-3 left-3 grid size-7 place-items-center rounded-lg text-white font-bold shadow-md"
          style={{ background: "var(--accent)" }}
        >
          0{city.order}
        </span>

        {/* City Name overlay inside image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="hg-display text-2xl font-bold text-white leading-none drop-shadow-sm">
            {city.name}
          </h3>
          <p className="u-label-sm mt-1 text-white/80 text-[11px] truncate flex items-center gap-1">
            <MapPin size={10} className="shrink-0" />
            {city.state}
          </p>
        </div>
      </div>

      {/* Landmark info & Status */}
      <div className="mt-4 flex flex-col justify-between flex-1 gap-2">
        <p className="text-xs text-muted-foreground line-clamp-1">
          {city.landmark}
        </p>
        <div className="pt-1">
          <StatusChip status={city.status} cityOrder={city.order} />
        </div>
      </div>
    </button>
  );
}
