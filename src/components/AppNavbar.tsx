import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CreditCard, BookOpen, User, GraduationCap, Hash } from "lucide-react";
import { studentData } from "@/data/studentData";

const navItems = [
  { label: "Minha Carteirinha", path: "/", icon: CreditCard },
  { label: "Grade Curricular", path: "/grade", icon: BookOpen },
];

const AppNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src={studentData.photoUrl}
                alt={studentData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-foreground leading-tight">
                {studentData.name.split(" ").slice(0, 2).join(" ")}
              </p>
              <p className="text-xs text-muted-foreground">
                {studentData.course}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card">
          {/* Student Info */}
          <div className="px-4 py-4 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={studentData.photoUrl}
                  alt={studentData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-foreground text-sm truncate">{studentData.name}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <GraduationCap className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{studentData.course}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Hash className="w-3 h-3 flex-shrink-0" />
                  <span>RA: {studentData.ra}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="px-2 py-2 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppNavbar;
