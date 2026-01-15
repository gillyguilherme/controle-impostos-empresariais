import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-value">{children}</div>
    </div>
  );
}
