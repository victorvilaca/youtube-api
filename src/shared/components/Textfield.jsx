import { Search } from "react-feather";

const Textfield = props => {
  const { onChange, buttonSearch, buttonSearchOnClick, ...rest } = props;

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      buttonSearchOnClick();
    }
  };

  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        onChange={({ target: { value } }) => onChange(value)}
        {...rest}
      />
      {buttonSearch && (
        <button onClick={buttonSearchOnClick} style={styles.button}>
          <Search size={10} />
        </button>
      )}
    </>
  );
};

const styles = {
  button: {
    cursor: "pointer"
  }
};

export default Textfield;
