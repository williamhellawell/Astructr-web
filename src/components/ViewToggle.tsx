import { useState } from "react";

interface ViewToggleProps {
  value: "use-case" | "role";
  onChange: (value: "use-case" | "role") => void;
}

export const ViewToggle = ({ value, onChange }: ViewToggleProps) => {
  return (
    <div className="inline-flex items-center bg-muted rounded-full p-1 shadow-md">
      <button
        onClick={() => onChange("use-case")}
        className={`
          px-8 py-3 rounded-full font-medium transition-all duration-300
          ${value === "use-case" 
            ? "bg-primary text-primary-foreground shadow-md" 
            : "text-muted-foreground hover:text-foreground"
          }
        `}
      >
        By Use Case
      </button>
      <button
        onClick={() => onChange("role")}
        className={`
          px-8 py-3 rounded-full font-medium transition-all duration-300
          ${value === "role" 
            ? "bg-primary text-primary-foreground shadow-md" 
            : "text-muted-foreground hover:text-foreground"
          }
        `}
      >
        By Role
      </button>
    </div>
  );
};
