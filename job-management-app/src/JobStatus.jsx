import "./JobStatus.css"
import PropTypes from 'prop-types'

export const JobStatus = ({ title }) => {
  return (
    <article className="JobStateArticle">
      <p className="textArticle">{title}</p>
    </article>
  )
}

JobStatus.propTypes = {
  title: PropTypes.string.isRequired
}