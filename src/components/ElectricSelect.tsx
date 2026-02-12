"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

export function ElectricSelect({
  id,
  name,
  label,
  placeholder = "Select",
  options,
  required,
  defaultValue = "",
}: {
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  options: Option[];
  required?: boolean;
  defaultValue?: string;
}) {
  const reactId = useId();
  const controlId = id ?? `${name}-${reactId}`;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const selected = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value]
  );

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!open) return;
      const target = event.target as Node | null;
      if (!target) return;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <label className="text-xs text-white/60" htmlFor={controlId}>
        {label}
      </label>

      <input type="hidden" name={name} value={value} />

      <button
        ref={buttonRef}
        id={controlId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="mt-2 flex h-11 w-full items-center justify-between gap-3 rounded-xl border border-cyan-400/30 bg-[#0E1628]/70 px-4 text-left text-sm text-white shadow-[0_0_25px_rgba(0,245,255,0.15)] backdrop-blur-md outline-none transition hover:border-cyan-300/50 focus:border-[#00F5FF]/60"
      >
        <span
          className={
            selected
              ? "text-white"
              : "text-white/45"
          }
        >
          {selected ? selected.label : placeholder}
        </span>

        <span className="text-white/55">▾</span>
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={label}
          className="absolute left-0 right-0 z-50 mt-2 max-h-72 overflow-auto rounded-xl border border-cyan-400/30 bg-[#0E1628] p-1 shadow-[0_0_25px_rgba(0,245,255,0.15)]"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setValue(opt.value);
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                className={
                  "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm transition " +
                  (isSelected
                    ? "bg-cyan-400/10 text-cyan-300 shadow-[0_0_16px_rgba(0,245,255,0.18)]"
                    : "text-gray-300 hover:bg-cyan-400/10 hover:text-white")
                }
              >
                <span className={isSelected ? "font-medium" : "font-normal"}>
                  {opt.label}
                </span>
                <span
                  className={
                    "h-5 w-0.5 rounded-full " +
                    (isSelected
                      ? "bg-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.35)]"
                      : "bg-transparent")
                  }
                />
              </button>
            );
          })}

          {required ? (
            <div className="px-4 pb-2 pt-1 text-[11px] text-white/35">
              Required
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
