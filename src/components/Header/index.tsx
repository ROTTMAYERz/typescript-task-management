import './Header.css';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function Header(props: HeaderProps) {
  const { theme, setTheme } = props;

  const ToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>{theme === 'light' ? 'โหลดกลางวัน' : 'โหมดกลางคืน'}</span>
        <span className="icon" onClick={ToggleTheme}>
          {theme === 'light' ? <BsSunFill /> : <BsMoonStarsFill />}
        </span>
      </div>
    </header>
  );
}
