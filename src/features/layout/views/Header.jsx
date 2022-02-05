import Button from "../../../shared/components/Button";
import Textfield from "../../../shared/components/Textfield";
import { Search } from "react-feather";

const Header = props => {
  return (
    <div id="header" style={styles.header}>
      <div style={styles.textfieldContainer}>
        <Textfield />
      </div>
      <div style={styles.buttonContainer}>
        <Button style={styles.button} label={<Search size={10} />} />
      </div>
    </div>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: "0",
    backgroundColor: "blue",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  textfieldContainer: {
    marginLeft: "20px",
    height: "30px"
  },
  buttonContainer: {
    marginRight: "20px",
    height: "30px"
  }
};

export default Header;
