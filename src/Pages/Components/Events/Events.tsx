import React from "react";
import styles from "./Events.module.css";

const Events: React.FC = () => {
  return (
    <div className={styles.buttonContainer}>
      <a href="/events" className={styles.eventButton}>
        Events ➤
      </a>
    </div>
  );
};

export default Events;
