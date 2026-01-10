import { ChartBarIcon, HomeIcon, SettingsIcon, UserIcon } from "lucide-react";

export const links = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon size={16} />,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <ChartBarIcon size={16} />,
  },
  {
    name: "Users",
    href: "/users",
    icon: <UserIcon size={16} />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <SettingsIcon size={16} />,
  },
];
