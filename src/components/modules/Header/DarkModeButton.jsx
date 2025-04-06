"use client";

import { useState, useEffect } from "react";
import { Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);

    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}

    />
  );
};

export default DarkModeToggle;
