import Textfield from "../../../shared/components/Textfield";

const Header = props => {
  const { searchTerm, setSearchTerm, searchVideos } = props;

  return (
    <div id="header" style={styles.header}>
      <div style={styles.textfieldContainer}>
        <Textfield
          onChange={value => setSearchTerm(value)}
          buttonSearch
          buttonSearchOnClick={() => searchVideos(searchTerm)}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: "0",
    backgroundColor: "white",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #c17980"
  },
  textfieldContainer: {
    marginLeft: "20px",
    height: "30px"
  }
};

export default Header;
