import {useEffect} from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveMouse = evt => {
      setMousePosition({
        x: evt.clientX,
        y: evt.clientY,
      });
    };

    window.addEventListener('mousemove', moveMouse);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
