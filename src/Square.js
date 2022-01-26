function Square(props) {
  const classes = `square ${props.isWinSquare ? "win-square" : ""}`;
  return (
    <button className={classes} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
