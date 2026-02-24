import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(roles: string[]) {
  const [text, setText] = useState('');
  const rolesRef = useRef(roles);
  const idx = useRef(0);
  const char = useRef(0);
  const del = useRef(false);
  const paused = useRef(false);

  useEffect(() => {
    const tick = () => {
      const cur = rolesRef.current[idx.current];
      if (paused.current) return;
      if (!del.current) {
        char.current++;
        setText(cur.slice(0, char.current));
        if (char.current === cur.length) {
          paused.current = true;
          setTimeout(() => { paused.current = false; del.current = true; }, 2200);
        }
      } else {
        char.current--;
        setText(cur.slice(0, char.current));
        if (char.current === 0) {
          del.current = false;
          idx.current = (idx.current + 1) % rolesRef.current.length;
        }
      }
    };
    const id = setInterval(tick, del.current ? 35 : 75);
    return () => clearInterval(id);
  }, [text]);

  return text;
}
