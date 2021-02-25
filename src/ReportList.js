import React from 'react';
import { Link } from 'react-router-dom';

const ReportList = props => {
  return(
    <div className="list-container">
    {props.reportList.map(reports => (
      <div className="list-arrange" key={reports.id}>
        <div className="list-image-text-wrapper">
          <Link to={`/reports/${reports.id}`}>
            <img src={reports.imageUrl} alt="image" />
            <h2 className="list-image-text">{reports.title}</h2>
          </Link>
        </div>
      </div>
    ))}
    </div>
  )
}

export default ReportList;
