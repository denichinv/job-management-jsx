
import PropTypes from 'prop-types';
import "./JobButtons.css"

export const JobButtons = (props) => {
  return (
    <div >
      <button className='bottom-line'>{props.value}</button>
    </div>
  );
};


JobButtons.propTypes = {
  value: PropTypes.string.isRequired
};

export default JobButtons;