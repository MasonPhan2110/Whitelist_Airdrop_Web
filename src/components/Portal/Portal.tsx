import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

function ReactPortal({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? (
    createPortal(
      children,
      (document.getElementsByTagName('BODY')[0] as Element) || <></>
    )
  ) : (
    <></>
  );
}
export default ReactPortal;
