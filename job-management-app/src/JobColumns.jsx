import PropTypes from "prop-types";
import "./JobColumns.css";

export const JobColumns = ({ className, status, children }) => {
  return (
    <section className={className}>
      <h3>{status}</h3>
      {children}
    </section>
  );
};

JobColumns.propTypes = {
  className: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default JobColumns;