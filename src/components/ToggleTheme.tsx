import "../styles/toggle-theme.css"
import useTheme from "../utils/useTheme";

function ToggleTheme() {
  // const themeContext = useTheme();
 const {theme, setTheme} = useTheme();
  return (
    <label className="toggle">
      <input className="toggle-checkbox" onClick={() => {
        setTheme(!theme)
      }} type="checkbox"/>
      <div className="toggle-switch" />
    </label>
  );
}

export default ToggleTheme;
