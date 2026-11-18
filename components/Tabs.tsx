"use client";
import { useRef, useState } from "react";
import type { Group } from "@/lib/content";

export default function Tabs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const n = groups.length;

  function pick(i: number) {
    setActive(i);
    refs.current[i]?.focus();
  }

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Age groups">
        {groups.map((g, i) => (
          <button
            key={g.id}
            ref={(el) => { refs.current[i] = el; }}
            className="tab" role="tab" id={`t-${g.id}`} aria-controls={`p-${g.id}`}
            aria-selected={active === i} tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") pick((i + 1) % n);
              if (e.key === "ArrowLeft") pick((i + n - 1) % n);
            }}
          >
            {g.label}
          </button>
        ))}
      </div>
      {groups.map((g, i) => (
        <div key={g.id} className="panel" role="tabpanel" id={`p-${g.id}`} aria-labelledby={`t-${g.id}`} hidden={active !== i}>
          <div className="intro">
            <h3>{g.title}</h3>
            <p>{g.intro}</p>
          </div>
          <ul className="list">
            {g.items.map(([t, d]) => (
              <li key={t}><b>{t}:</b> {d}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
