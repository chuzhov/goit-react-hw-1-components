import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const StatItem = ( {label, percentage} ) => {
    
    return ( <li className={css["stat-item"]}>
        <p className={css["stat-label"]}>{label}</p>
        <p className={css["stat-percentage"]}>{percentage}%</p>
      </li>
      
  )
}

StatItem.propTypes = {
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
}

export default StatItem;
