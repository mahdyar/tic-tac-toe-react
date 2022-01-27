import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  renderSquare(i) {
    return (
      <Square
        isWinSquare={
          this.props.winningCombo && this.props.winningCombo.includes(i)
        }
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let boardSquares = [];

    for (let row = 0; row < 3; row++) {
      let boardRow = [];
      for (let column = 0; column < 3; column++) {
        boardRow.push(
          <span key={row * 3 + column}>
            {this.renderSquare(row * 3 + column)}
          </span>
        );
      }
      boardSquares.push(
        <div className="board-row" key={row}>
          {boardRow}
        </div>
      );
    }

    return <div>{boardSquares}</div>;
  }
}

export default Board;
