import { Search } from "react-feather";

const Textfield = props => {
  const { onChange, buttonSearch, buttonSearchOnClick, ...rest } = props;

  return (
    <>
      <input
        className="rounded-md w-full border border-gray-400 p-3 mb-5"
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
