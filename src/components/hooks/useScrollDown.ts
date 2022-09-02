import { useEffect, useState } from 'react';

export default function useScrollDown(): boolean {
  /* States */
  const [oldScrollTop, setOldScrollTop] = useState<number>(0);
  const [down, setDown] = useState<boolean>(true);

  /* Functions */
  const handleScrollDirection = (oldScrollTop: number) => () => {
    const newScrollTop = window.scrollY || document.documentElement.scrollTop;
    if (newScrollTop > oldScrollTop) {
      setDown(true);
    } else {
      setDown(false);
    }
    setOldScrollTop(newScrollTop);
  };

  /* Hooks */
  useEffect(() => {
    window.addEventListener('scroll', handleScrollDirection(oldScrollTop));
    return () => {
      window.removeEventListener('scroll', handleScrollDirection(oldScrollTop));
    };
  }, [oldScrollTop]);

  /* Main */
  return down;
}
