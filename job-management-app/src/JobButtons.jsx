import PropTypes from 'prop-types';
import "./JobButtons.css"

export const JobButtons = ({ value, onClick }) => {
  return (
    <div>
      <button className='bottom-line' onClick={onClick}>{value}</button>
    </div>
  );
};

JobButtons.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default JobButtons;