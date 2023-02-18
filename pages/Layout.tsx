interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen ">
        {children}
      </div>
    </>
  );
}
