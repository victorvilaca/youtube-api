import Header from "./Header";

const Layout = props => {
  const { children, showHeader, setSearchTerm, searchTerm, searchVideos } = props;

  return (
    <div>
      {showHeader && (
        <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} searchVideos={searchVideos} />
      )}
      {children}
    </div>
  );
};

export default Layout;
