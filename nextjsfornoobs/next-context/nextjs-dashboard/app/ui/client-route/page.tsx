"use client"

import { useTheme } from "@/components/theme-provider";
const ClientRouteComponent = () => {
  const theme = useTheme()
  console.log(theme.colors.primary)
  return <div style={{background: theme.colors.primary}}>ClientRouteComponent Component</div>;
};

export default ClientRouteComponent;

