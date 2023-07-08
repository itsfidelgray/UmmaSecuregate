const Button = ({ onClick, text, color }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${color}  `}
      style={{ fontSize: "11px", marginBottom: "5px", marginRight: "5px", minHeight:"10px" }}
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
