import { useState } from "react";
import catImg from "../../images/Cat.png";
import catImgRet from "../../images/Cat2x.png";
import "./Card.css";

export default function Card(props) {
  const [isPick, setIsPick] = useState(false);
  const [text, setText] = useState("Сказочное заморское яство");

  function pickUpCard() {
    if (isPick) {
      setIsPick(false);
      setText("Сказочное заморское яство");
    } else {
      setIsPick(true);
    }
  }

  function checkPickUp() {
    if (isPick) {
      return <p className="main__caption">{props.description}</p>;
    }
    return (
      <p className="main__caption">
        Чего сидишь? Порадуй котэ,&nbsp;
        <button className="main__caption-link" onClick={pickUpCard}>
          купи.
        </button>
      </p>
    );
  }

  function checkActiveCard() {
    return `main__card ${isPick ? "main__card_active" : ""}`;
  }

  function setColorCircle() {
    return isPick ? "main__circle_active" : "";
  }

  function setRightWord() {
    if (props.promoAmountMouses < 2) {
      return "мышь";
    }
    if (props.promoAmountMouses < 5) {
      return " мыши";
    }
    if (props.promoAmountMouses >= 5) {
      return " мышей";
    }
  }

  function onHover() {
    if (isPick) {
      setText("Котэ не одобряет?");
    }
  }

  function onLeave() {
    if (isPick) {
      setText("Сказочное заморское яство");
    }
  }

  return (
    <li className="main__list-item">
      <article
        className={props.isDisable ? "main__card-disable" : checkActiveCard()}
        onClick={pickUpCard}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {props.isDisable ? <div className="main__card-overlay"></div> : null}
        <div className="main__card-inside">
          <div className="main__text-block">
            <p className={`main__text ${props.isDisable ? "disable" : ""}`}>
              {text}
            </p>
            <p className={`main__food-name ${props.isDisable ? "disable" : ""}`}>
              {props.foodName}
            </p>
            <p className={`main__food-type ${props.isDisable ? "disable" : ""}`}>
              {props.foodType}
            </p>
            <p className={`main__promo-text ${props.isDisable ? "disable" : ""}`}>
              <b className="main__promo-amount">
                {props.promoAmountParts}&nbsp;
              </b>
              порций
              <br />
              <b className="main__promo-amount">{props.promoAmountMouses}</b>
              {setRightWord()}&nbsp;в подарок
              <br />
              {props.promoAmountMouses > 2 ? "заказчик доволен" : null}
            </p>
          </div>
          <picture>
            <source srcSet={`${catImg} 1x, ${catImgRet} 2x`} />
            <img className="main__img" src={catImg} alt="кошка" />
          </picture>
          <div
            className={`main__circle ${
              props.isDisable ? "main__circle_disable" : setColorCircle()
            }`}
          >
            <p className="main__circle-number">{props.weight}</p>
            <p className="main__circle-text">кг</p>
          </div>
        </div>
      </article>
      {props.isDisable ? (
        <p className="main__caption main__caption_disable">
          Печалька, {props.foodType}&nbsp;закончился.
        </p>
      ) : (
        checkPickUp()
      )}
    </li>
  );
}
