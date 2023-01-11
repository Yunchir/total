import { useState } from "react"

export default function Users(props) {
    const [x, setX] = useState(props.score);
    function add() {
      setX(x + 1);
    }
    function minus() {
      setX(x - 1);
    }
    return (
      <tr>
        <th scope="row">{props.index}</th>
        <td>{props.name}</td>
        <td>
          <button
            onClick={minus}
            style={{ marginRight: "15px", borderRadius: "50%" }}
          >
            -
          </button>
          {x}
          <button
            onClick={add}
            style={{ marginLeft: "15px", borderRadius: "50%" }}
          >
            +
          </button>
        </td>
      </tr>
    );
  }
  