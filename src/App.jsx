import { useState } from "react";
import styles from "./App.module.scss";
import redDodge from "./assets/DodgeRed.png";
import BlackDodge from "./assets/DodgeBlack.png";

function App() {
  const [selectedImage, setSelectedImage] = useState(redDodge);

  const handleColorClick = (color) => {
    switch (color) {
      case "red":
        setSelectedImage(redDodge);
        break;
      case "black":
        setSelectedImage(BlackDodge);
        break;
    }
  };

  return (
    <>
      <main className={styles.hero}>
        <h1 className={styles.title}>Challenger</h1>
        <div className={styles.heroImage}>
          <img src={selectedImage} alt="Dodge Challenger" />
          <div className={styles.introBox}>
            <ul>
              <li>Power</li>
              <li>Beauty</li>
              <li>Comfort</li>
            </ul>
          </div>
        </div>
      </main>
      <div className={styles.colorContainer}>
        <div className={styles.colorBox}>
          <div
            className={styles.color}
            style={{ backgroundColor: "#C92525" }}
            onClick={()=>handleColorClick("red")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#E2B73A" }}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#3978AB" }}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#121212" }}
            onClick={()=>handleColorClick("black")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#132A5A" }}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#4D5C36" }}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#3C375A" }}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#532524" }}
          ></div>
        </div>
      </div>
      <h1>sss</h1>
    </>
  );
}

export default App;
