import { useEffect, useState } from 'react';

const LINK_SELECTOR = 'a, button, input, textarea, select, option, [role="button"], [data-cursor="link"]';

export default function MousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isLinkCursor, setIsLinkCursor] = useState(false);

  useEffect(() => {
    const updatePointerState = (event) => {
      const target = event.target;
      const isLinkTarget = target && target.closest ? target.closest(LINK_SELECTOR) : false;

      setPosition({ x: event.clientX, y: event.clientY });
      setIsLinkCursor(Boolean(isLinkTarget));
      setVisible(true);
    };

    const handlePointerLeave = () => setVisible(false);

    window.addEventListener('pointermove', updatePointerState);
    window.addEventListener('pointerover', updatePointerState);
    window.addEventListener('pointerleave', handlePointerLeave);
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('pointermove', updatePointerState);
      window.removeEventListener('pointerover', updatePointerState);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <img
      src={isLinkCursor ? '/cursorlink.png' : '/cursor.png'}
      alt=""
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        transform: `translate(${position.x}px, ${position.y}px)`,
        marginLeft: '-14px',
        marginTop: '-14px',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.08s ease',
      }}
    />
  );
}