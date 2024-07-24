import { useState } from "react";
import styles from "./App.module.scss";
import redDodge from "./assets/DodgeRed.png";
import BlackDodge from "./assets/DodgeBlack.png";
import BlackBlueDodge from "./assets/DodgeBlackBlue.png";
import BlueDodge from "./assets/DodgeBlue.png";
import YellowDodge from "./assets/DodgeYellow.png";
import GreenDodge from "./assets/DodgeGreen.png";
import PurpleDodge from "./assets/DodgePurple.png";
import BrwonDodge from "./assets/DodgeBrown.png";

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
      case "blue":
        setSelectedImage(BlueDodge);
        break;
      case "blackBlue":
        setSelectedImage(BlackBlueDodge);
        break;
      case "yellow":
        setSelectedImage(YellowDodge);
        break;
      case "green":
        setSelectedImage(GreenDodge);
        break;
      case "purple":
        setSelectedImage(PurpleDodge);
        break;
      case "brown":
        setSelectedImage(BrwonDodge);
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
            onClick={() => handleColorClick("red")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#E2B73A" }}
            onClick={() => handleColorClick("yellow")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#3978AB" }}
            onClick={() => handleColorClick("blue")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#121212" }}
            onClick={() => handleColorClick("black")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#132A5A" }}
            onClick={() => handleColorClick("blackBlue")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#4D5C36" }}
            onClick={() => handleColorClick("green")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#3C375A" }}
            onClick={() => handleColorClick("purple")}
          ></div>
          <div
            className={styles.color}
            style={{ backgroundColor: "#532524" }}
            onClick={() => handleColorClick("brown")}
          ></div>
        </div>
      </div>
      <h1>sss</h1>
    </>
  );
}

export default App;
