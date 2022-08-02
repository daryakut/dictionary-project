import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="synonyms-section">
        <section>
          <ul className="synonyms">
            {" "}
            <strong>Synonyms:</strong>
            <br />
            <br />
            {props.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
