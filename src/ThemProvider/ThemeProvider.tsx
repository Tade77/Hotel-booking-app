"use client";

import { ReactNode, useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const ThemeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(ThemeFromStorage);
};
