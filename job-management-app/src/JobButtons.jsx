import PropTypes from 'prop-types';
import "./JobButtons.css"

export const JobButtons = ({ value, onClick, isSelected }) => {
  return (
    <div>
      <button 
        className={`bottom-line ${isSelected ? 'selected' : ''}`} 
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

JobButtons.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
};

export default JobButtons;