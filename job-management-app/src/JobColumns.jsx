
import PropTypes from "prop-types";
import "./JobColumns.css";

export const JobColumns = (props) => {
  return (
    <>
      <section className={props.className}>
        <h3>{props.value}</h3>
      </section>
    </>
  );
};


JobColumns.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, 
};



export default JobColumns;
