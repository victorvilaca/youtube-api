const Textfield = props => {
  const { value, onChange, ...rest } = props;

  return (
    <input
      className="rounded-md w-full border border-gray-400 p-3 mb-5"
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
    />
  );
};

export default Textfield;
