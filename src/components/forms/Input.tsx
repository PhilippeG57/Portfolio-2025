interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
          focus:border-[#a43f49] focus:ring focus:ring-[#a43f49] focus:ring-opacity-50 ${className}`}
        {...props}
      />
    </div>
  );
}