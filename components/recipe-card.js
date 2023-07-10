import React from 'react';
import styles from '../styles/RecipeCard.module.css'

const RecipeCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Recipe</h2>
      {/* <img className={styles.cardImage} src="recipe-image.jpg" alt="Recipe" /> */}
      <div className={styles.cardButtons}>
        <button className={styles.cardButton}>Watch Video</button>
        <button className={`${styles.cardButton} ${styles.cardButtonPrimary}`}>View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
