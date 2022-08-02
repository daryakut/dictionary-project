import React, { useRef } from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Results(props) {
  const audio = useRef(new Audio());
  function play(src) {
    if (audio.current) {
      audio.current.src = src;
      audio.current.play();
    }
  }
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="word">{props.results.word}</h2>

          {props.results.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetic
                  phonetic={phonetic}
                  onClick={() => play(phonetic.audio)}
                />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="key">
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
