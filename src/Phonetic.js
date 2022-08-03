import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="Phonetic-button" onClick={props.onClick}>
        <button type="button" class="btn btn-warning">
          ▶️
        </button>
      </div>
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
