import PropTypes from "prop-types";
function Square({ isWinSquare, value, onClick }) {
  const classes = `square ${isWinSquare ? "win-square" : ""}`;
  return (
    <button className={classes} onClick={onClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  isWinSquare: false,
  value: null,
  onClick: () => {},
};

Square.propTypes = {
  isWinSquare: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;
