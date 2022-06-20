import { useState } from "react";
import catImg from '../images/Cat-min.png';
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
            return <p className="main__caption">{props.description}</p>
        }
        return <p className="main__caption">Чего сидишь? Порадуй котэ,&nbsp;<button className="main__caption-link" onClick={pickUpCard}>купи.</button></p> 
    }

    function checkActiveCard() {
        return `main__card ${isPick && "main__card_active"}`
    }

    function setColorCircle() {
        return isPick ? "main__circle_active" : "";
    }

    function setRightWord() {
        if (props.promoAmountMouses < 2) { return "мышь"; }
        if (props.promoAmountMouses < 5) { return "мыши"; }
        if (props.promoAmountMouses >= 5) { return "мышей"; }
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
                <article className={props.isDisable ? "main__card-disable" : checkActiveCard()} onClick={pickUpCard} onMouseOver={onHover} onMouseLeave={onLeave}>
                    {props.isDisable && <div className="main__card-overlay"></div>}
                    <div className="main__card-inside">
                        <div className="main__text-block">
                            <p className={`main__text ${props.isDisable && "main__text_disable"}`} >{text}</p>
                            <p className={`main__food-name ${props.isDisable && "main__food-name_disable"}`}>{props.foodName}</p>
                            <p className={`main__food-type ${props.isDisable && "main__food-type_disable"}`}>{props.foodType}</p>
                            <p className={`main__promo-take ${props.isDisable && "main__promo-take_disable"}`}><b className="main__promo-amount">{props.promoAmountParts}&nbsp;</b>порций</p>
                            <p className={`main__promo-give ${props.isDisable && "main__promo-give_disable"}`}><b className="main__promo-amount">{props.promoAmountMouses}&nbsp;</b>{setRightWord()} в подарок</p>
                        </div>
                        <img className="main__img" src={catImg} alt="кошка" />
                        <div className={`main__circle ${props.isDisable ? "main__circle_disable" : setColorCircle()}`}>
                            <p className="main__circle-number">{props.weight}</p>
                            <p className="main__circle-text">кг</p>
                        </div>
                    </div>
                </article>
                {props.isDisable ? 
                    <p className="main__caption main__caption_disable">Печалька, {props.foodType}&nbsp;закончился.</p> : checkPickUp()
                }
        </li>
    );
}