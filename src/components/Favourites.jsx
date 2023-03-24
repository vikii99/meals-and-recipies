import { useGlobalContext } from "../context";
import {MdOutlineDeleteOutline} from "react-icons/md"

const Favourites = () => {
  const { favourites, selectMeal, removeFromFavourites } = useGlobalContext();
  return (
    <main className="fhead">
      <section className="favorites">
        <div className="favorites-content">
          <h5>Favourites</h5>
          <div className="favorites-container">
            {favourites.map((item) => {
              const { idMeal, strMealThumb: image, strMeal: title } = item;

              return (
                <div key={idMeal} className="favorite-item">
                  <img
                    src={image}
                    className="favorites-img img"
                    onClick={() => selectMeal(idMeal, true)}
                  />
                  <div>{title}</div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromFavourites(idMeal)}
                  >
                    <MdOutlineDeleteOutline />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Favourites;
