import React from "react";

export default function SkillCard({ skill, onDelete, onUpdate }) {
  if (!skill) return null;

  const { id, name, category, progress } = skill;

  return (
    <div className="bg-white bg-slate-50 rounded-lg shadow p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        <div className="text-sm font-semibold">{progress}%</div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden dark:bg-gray-700">
        <div
          className="h-2 bg-indigo-600 transition-all"
          style={{ width: `${Math.max(0, Math.min(100, Number(progress) || 0))}%` }}
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => onUpdate?.(id, Math.max(0, Math.min(100, (progress || 0) - 10)))}
            className="px-3 py-1 rounded bg-gray-100 bg-slate-50 hover:bg-gray-200 text-sm"
          >
            -10
          </button>
          <button
            onClick={() => onUpdate?.(id, Math.max(0, Math.min(100, (progress || 0) + 10)))}
            className="px-3 py-1 rounded bg-indigo-600 text-white hover:opacity-90 text-sm"
          >
            +10
          </button>
        </div>

        <button
          onClick={() => onDelete?.(id)}
          className="px-3 py-1 rounded bg-red-500 text-white hover:opacity-90 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
