import PropTypes from "prop-types";
import StatItem from "./Stat"
import css from "./Statistics.module.css";

const Statistics = ( { stats, title } ) => {
    
    return ( 
        <section className="statistics">
        {
            title && (<h2 className={css["stat-title"]}>{title}</h2>)     
        }
        <ul className={css["stat-list"]}>
        {
            stats.map((el) => (
            <StatItem
                key={el.id}
                label={el.label}
                percentage={el.percentage}
            />
            ))
        }
        </ul>
    </section>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}


export default Statistics;
