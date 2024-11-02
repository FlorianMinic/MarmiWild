import React, { useState } from 'react';

function MenuItem({ itemName, description, foodImage, price, isFavorite: initialFavorite }) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={foodImage} alt={itemName} />
        <figcaption>
          <h2>{itemName}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
      <aside>{price} EUR</aside>

      <button type="button" onClick={handleClickFavorite}>
        {isFavorite ? "❤️" : "🖤"}
      </button>
    </section>
  );
}

export default MenuItem;
