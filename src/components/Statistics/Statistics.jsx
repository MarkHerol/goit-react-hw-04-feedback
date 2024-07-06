import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Stats =({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return(
        <div className='feedback'>
            <p className ={css.label}> Good: <span className={css.value}>{good}</span></p>
            <p className ={css.label}> Neutral: <span className={css.value}>{neutral}</span></p>
            <p className ={css.label}> Bad: <span className={css.value}></span>{bad}</p>
            <p className ={css.label}> Total: <span className={css.value}></span>{total}</p>
            <p className ={css.label}> Positive Feedback: <span className={css.value}>{positivePercentage}%</span></p> 
        </div>
    );
}

Stats.propTypes ={
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}