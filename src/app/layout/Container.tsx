type container = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: container) {
  return <div className={`mx-auto w-full ${className}`}>{children}</div>;
}
