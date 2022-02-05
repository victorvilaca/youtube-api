const Button = props => {
  const { label, style, onClick, disabled } = props;

  return (
    <button onClick={onClick} style={{ ...style, ...styles.button }} disabled={disabled}>
      {label}
    </button>
  );
};

const styles = {
  button: {
    border: 0,
    cursor: "pointer"
  }
};

export default Button;
