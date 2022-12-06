import React from "react";
import { EL_SIZE, NAMES } from "./constants";
import { Square } from "./Square";

export const Squares = () => (
  <div style={{ width: `${EL_SIZE * 3}px` }}>
    {NAMES.map((name, key) => (
      <Square key={key} name={name} renderName={false} />
    ))}
  </div>
);
