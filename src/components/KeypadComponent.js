import React, { Component } from "react";

class KeyPadComponent extends Component {
  render() {
    return (
      <div className="buttons">
        {/* Since we need to send the click event to the parent ( with information
      about which button was clicked), we will call this.props.OnClick function
      on every button click and pass e.target.name as an argument. */}

        <button name="1" onClick={(e) => this.props.onClick(e.target.name)}>
          1
        </button>
        <button name="2" onClick={(e) => this.props.onClick(e.target.name)}>
          2<div className="sub">ABC</div>
        </button>
        <button name="3" onClick={(e) => this.props.onClick(e.target.name)}>
          3<div className="sub">DEF</div>
        </button>
        <br />

        <button name="4" onClick={(e) => this.props.onClick(e.target.name)}>
          4<div className="sub">GHI</div>
        </button>
        <button name="5" onClick={(e) => this.props.onClick(e.target.name)}>
          5<div className="sub">JKL</div>
        </button>
        <button name="6" onClick={(e) => this.props.onClick(e.target.name)}>
          6<div className="sub">MNO</div>
        </button>
        <br />

        <button name="7" onClick={(e) => this.props.onClick(e.target.name)}>
          7<div className="sub">PQRS</div>
        </button>
        <button name="8" onClick={(e) => this.props.onClick(e.target.name)}>
          8<div className="sub">TUV</div>
        </button>
        <button name="9" onClick={(e) => this.props.onClick(e.target.name)}>
          9<div className="sub">WXYZ</div>
        </button>
        <br />

        <button name="*" onClick={(e) => this.props.onClick(e.target.name)}>
          *
        </button>
        <button name="0" onClick={(e) => this.props.onClick(e.target.name)}>
          0
          <div
            className="sub"
            sname="0"
            onClick={(e) => this.props.onClick(e.target.sname)}
          >
            +
          </div>
        </button>
        <button name="#" onClick={(e) => this.props.onClick(e.target.name)}>
          #
        </button>
        <br />
        <button name="star" onClick={(e) => this.props.onClick(e.target.name)}>
          ⭐
        </button>
        <button name="call" onClick={(e) => this.props.onClick(e.target.name)}>
          📲
        </button>
        <button
          name="backspace"
          onClick={(e) => this.props.onClick(e.target.name)}
        >
          ⬅️
        </button>
        <br />
      </div>
    );
  }
}

export default KeyPadComponent;
