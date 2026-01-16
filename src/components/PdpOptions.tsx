"use client";

import { useState } from "react";
import { logEvent } from "@/lib/research";

type PdpOptionsProps = {
  id: string;
};

export function PdpOptions({ id }: PdpOptionsProps) {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      {/* Dark pattern: pre-selected add-on. Intervention: explicit label + tooltip + comparison. */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Add-on coverage (12 months)
          </p>
          <p className="mt-1 text-xs text-slate-500" id={`${id}-label`}>
            This option is pre-selected.
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            id={id}
            type="checkbox"
            checked={isSelected}
            onChange={(event) => {
              setIsSelected(event.target.checked);
              logEvent("ui_interaction", {
                element: id,
                action: event.target.checked
                  ? "addon_selected"
                  : "addon_unselected",
              });
            }}
            className="h-4 w-4 rounded border-slate-300"
          />
          Include for ₹499
        </label>
      </div>
      <p
        className="mt-2 text-xs text-slate-500"
        title="Adds coverage for accidental damage and extended support."
      >
        Tooltip: explains implications of the add-on choice.
      </p>
      <div className="mt-4 grid gap-3 text-xs text-slate-600 md:grid-cols-2">
        <div className="rounded-md border border-slate-200 p-3">
          <p className="font-semibold text-slate-900">Standard coverage</p>
          <ul className="mt-2 list-disc pl-4">
            <li>12-month manufacturer warranty</li>
            <li>Standard repair turnaround</li>
          </ul>
        </div>
        <div className="rounded-md border border-slate-200 p-3">
          <p className="font-semibold text-slate-900">Add-on coverage</p>
          <ul className="mt-2 list-disc pl-4">
            <li>Accidental damage coverage</li>
            <li>Priority support queue</li>
          </ul>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Research hook: IF rapid clicks detected THEN show add-on implications.
      </p>
    </div>
  );
}
