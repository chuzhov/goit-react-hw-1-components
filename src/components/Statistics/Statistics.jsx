import PropTypes from "prop-types";
import StatItems from "./Stat"
import css from "./Statistics.module.css";

const Statistics = ( props ) => {
    
    const { stats } = props;
    
    return ( <section className="statistics">
    {
        props.title ? (
            <h2 className={css["stat-title"]}>{props.title}</h2>
        ) : ( 
            <></> 
        )
    }
    <ul className={css["stat-list"]}>
    {
        stats.map((el) => (
        <StatItems
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
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
}

export default Statistics;
