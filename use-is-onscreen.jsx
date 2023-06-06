import {useState, useEffect, useRef} from 'react';

const useIsOnscreen = () => {
  const [isOnscreen, setIsOnscreen] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsOnscreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef]);

  return [isOnscreen, elementRef];
};

export default useIsOnscreen;
