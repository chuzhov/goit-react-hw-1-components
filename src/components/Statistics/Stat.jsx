import css from "./Statistics.module.css";

const StatItems = ( props ) => {
    
    return ( <li className={css["stat-item"]}>
        <p className={css["stat-label"]}>{props.label}</p>
        <p className={css["stat-percentage"]}>{props.percentage}%</p>
      </li>
      
  )
}

export default StatItems;
