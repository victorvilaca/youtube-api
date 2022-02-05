import Header from "./Header";

const Layout = props => {
  const { children, showHeader } = props;

  return (
    <div>
      {showHeader && <Header />}
      {children}
    </div>
  );
};

export default Layout;
