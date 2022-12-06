import React, { useMemo } from "react";
import { EL_SIZE } from "./constants";
import { generatePattern } from "./generatePattern";
import styles from "./Square.module.css";

export const Square = ({
  name,
  renderName,
}: {
  name: string;
  renderName: boolean;
}) => {
  const pattern = useMemo(() => generatePattern(name), [name]);

  return (
    <div
      className={styles.square}
      style={{
        background: pattern,
        width: `${EL_SIZE}px`,
        height: `${EL_SIZE}px`,
      }}
    >
      {renderName && <span className={styles.name}>{name}</span>}
    </div>
  );
};
