import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>Impostos Globais</h1>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
      </nav>
    </aside>
  );
}
