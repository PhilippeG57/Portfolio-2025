interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={`text-gray-700 hover:text-[#a43f49] transition-colors ${className}`}
    >
      {children}
    </a>
  );
}