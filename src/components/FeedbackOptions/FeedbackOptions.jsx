import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>
        {options.map(option => (
        <button
          className={css.optionButton}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes ={
    options: PropTypes.arrayOf(PropTypes.oneOf(['good','bad','neutral'])).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}