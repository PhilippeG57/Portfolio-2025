interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'alt';
}

export function Section({ 
  children, 
  id, 
  className = '',
  background = 'white'
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    alt: 'bg-gray-50',
  };

  return (
    <section 
      id={id} 
      className={`py-20 ${bgStyles[background]} ${className}`}
    >
      {children}
    </section>
  );
}