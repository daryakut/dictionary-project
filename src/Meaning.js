import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3 className="partOfSpeach">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>

              <div className="example">
                <Example example={definition.example} />
              </div>
            </div>
          );
        })}{" "}
      </section>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
