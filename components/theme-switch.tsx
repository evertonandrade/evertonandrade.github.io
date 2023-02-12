import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Light from '../public/icons/light.svg';
import Dark from '../public/icons/dark.svg';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div style={{cursor: 'pointer'}} onClick={handleChangeTheme}>
      {resolvedTheme === 'dark' ? <Dark /> : <Light />}
    </div>
  );
};

export default ThemeSwitch;
