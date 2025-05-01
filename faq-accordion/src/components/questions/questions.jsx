import "./questions.css";
import plus from "../../assets/images/icon-plus.svg";
import minus from "../../assets/images/icon-minus.svg";

export default function card(props) {
    let img = <img onClick={props.onSelect} src={plus} alt="" />;
    if (props.image) {
        img = <img onClick={props.onSelect} src={minus} alt="" />;
    }
    return (
    <>
    <div className="questions">
        <p>{props.q}</p>
        {img}
    </div>
    <div className={`answer ${props.image ? "show" : ""}`}>
        {props.children}
    </div>
    </>
);
}
