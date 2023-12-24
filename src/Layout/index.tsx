import { PropsWithChildren } from "react";

interface layoutProps {
  className?: string;
}

const Layout = ({
  children,
  className = "",
}: PropsWithChildren<layoutProps>) => {
  return (
    <div className={className}>
      <h2>Todo List</h2> {children}
    </div>
  );
};

export default Layout;
