import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        themeChange(false);
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
        
    };

    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                className="toggle toggle-sm"
                checked={theme === "dark"}
                onChange={handleToggle}
            />
            <span className="text-sm">{theme === "dark" ? "🌙 Dark" : "🌞 Light"}</span>
        </label>
    );
};

export default ThemeToggle;
