import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  // console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
          // return meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
