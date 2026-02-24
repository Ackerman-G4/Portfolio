import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const ref = useReveal();
  const dc = delay > 0 ? `reveal-delay-${delay}` : '';
  return (
    <div ref={ref} className={`${className} ${dc}`.trim()}>
      {children}
    </div>
  );
};

export default Reveal;
