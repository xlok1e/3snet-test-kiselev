interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className='max-w-[1440px] min-h-screen mx-auto'>{children}</div>;
};
