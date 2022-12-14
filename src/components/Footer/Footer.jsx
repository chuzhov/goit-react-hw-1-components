import css from "./Footer.module.css";
import logo from "../img/D.png"

const Footer = () => {

    return ( <div className={css["footer"]}>
        <div className={css["label-wrap"]}>
            <a href="https://github.com/chuzhov">
                <img src={logo} alt="logo" height="32px"/>
            </a>
        </div>
        <p className={css["footer-note"]}>GO IT! React Homework 01</p> 
        <p className={css["footer-disclaimer"]}>All rights recerved by their legal owners. 2022</p>
    </div>
)}

export default Footer;