import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Receipt,
  Globe
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        🌍 Impostos Globais
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/companies">
          <Building2 size={18} />
          Empresas
        </NavLink>

        <NavLink to="/taxes">
          <Receipt size={18} />
          Impostos
        </NavLink>

        <NavLink to="/countries">
          <Globe size={18} />
          Países
        </NavLink>
      </nav>
    </aside>
  );
}
