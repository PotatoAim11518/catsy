import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getCats } from "../../store/cats";
import { getItems, addItem } from "../../store/cartItem";
import { getCart } from "../../store/cart";
import styles from "./cat.module.css";

const Cat = () => {
  const { cat_id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const cats = useSelector((state) => state.cats);
  const cart_items = useSelector((state) => Object.values(state.cart_items));
  const cat = cats[cat_id];
  const isInCart = cart_items.map((item) => item.cat_id).includes(cat?.id);

  const randomWelcome = (name) => {
    const greetings = [
      `Nyaaa ${name}'s here to brighten your day! :3`,
      `In ancient times, cats were worshipped; ${name} has not forgotten this.`,
      `Who's adorable?! ${name} is!`,
      `Hewwo, my name is ${name}, nice to meet you! owo`,
      `${name} could be the purrrfect match!`,
      `"Meow meow meow meow, meow meow. Meow." - ${name}`,
      `${name} thinks toe beans are superior to thumbs.`,
      `${name} thinks you could be the one!`,
      `Anything is paw-sible with ${name} by your side!`,
      `${name} wants to spend all nine lives with you.`,
      `Ain’t no meowtain high enough to keep ${name} from you.`,
      `My hooman made me take this picture.`,
      `${name} thinks "crazy cat lady" is a compliment.`,
      `Do you wann-nya play with me?`,
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const [inCart, setInCart] = useState(false);

  const handleAddToBox = () => {
    setInCart(true);
    dispatch(addItem(cat?.id));
    history.push("/cart");
  };

  useEffect(() => {
    dispatch(getCats());
    dispatch(getCart());
    dispatch(getItems());
    setInCart(isInCart);
  }, [dispatch, isInCart]);

  return (
    <>
      <div className={styles.catContainer}>
        <div className={styles.catSummary}>
          <div
            className={styles.catImage}
            style={{ backgroundImage: `url(${cat?.image_url})` }}
          >
            {cat?.adopted && (
              <img
                className={styles.adoptedStamp}
                src="/assets/cat_adopted.png"
                alt="cat adopted"
              />
            )}
          </div>

          <div className={styles.catBasicInfo}>
            <div className={styles.catBasicInfoText}>
              <h2 className={styles.catName}>{cat?.name}</h2>
              <h3 className={styles.catBreed}>{cat?.breed.name}</h3>
              <p className={styles.catLocation}>
                {cat?.contact_city}, {cat?.contact_state}
              </p>
            </div>
            <div>
              <div className={styles.catActionButtons}>
                {cat?.adopted ? (
                  <>
                    <button
                      disabled={true}
                      className={styles.addToBoxButtonDisabled}
                    ></button>
                    <div className={styles.buttonText}>Already has a home</div>
                  </>
                ) : (
                  <>
                    <button
                      disabled={inCart}
                      onClick={handleAddToBox}
                      className={
                        inCart
                          ? styles.addToBoxButtonDisabled
                          : styles.addToBoxButton
                      }
                    ></button>
                    <div className={styles.buttonText}>
                      {inCart
                        ? "Hiding in your cardboard box!"
                        : "Add to cardboard box"}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <h1 className={styles.randomWelcome}>{randomWelcome(cat?.name)}</h1>

        <div className={styles.catInfo}>
          <p className={styles.catQuickInfo}>
            {cat?.age.name} | {cat?.gender.name} | {cat?.size.name}
          </p>
          <h2 className={styles.catInfoHeader}>About</h2>
          <p className={styles.catText}>
            Coat Length: {cat?.coat ? `${cat?.coat.name} Coat` : "Unspecified"}
          </p>
          <p className={styles.catText}>
            Spayed/Neutered: {cat?.spayed_neutered ? "Yes" : "No"}
          </p>
          <h2 className={styles.catInfoHeader}>Contact</h2>
          <p className={styles.catText}>{cat?.owner.username}</p>
          <p className={styles.catText}>{cat?.owner.email}</p>
          <p className={styles.catQuickDisclaimer}>
            <i class="fas fa-cat"> </i> Catsy Recommends that you should always
            make reasonable decisions when adopting pets. Their lives are in
            your hands!
          </p>
          <h2 className={styles.catInfoHeader}>{`Meet ${cat?.name}`}</h2>
          <p className={styles.catText}>{cat?.description}</p>
        </div>
        <div></div>
      </div>
      <div>
        <h1>Scratching Post Area</h1>
      </div>
    </>
  );
};

export default Cat;
