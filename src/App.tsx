import React from "react";
import styles from "./App.module.css";
import { Squares } from "./Squares/Squares";

function App() {
  return (
    <div className={styles.page}>
      <Squares />
    </div>
  );
}

export default App;
