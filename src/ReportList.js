import React from 'react';
import { Link } from 'react-router-dom';

const ReportList = props => {
  return(
    <div>
    {props.reportList.map(report => (
      <div className="arrange-list" key={report.id}>
        <div className="list-image-text-wrapper">
          <Link to={`/report/${report.id}`}>
            <img src={report.imageUrl} alt="image" />
            <h2 className="list-image-text">{report.title}</h2>
          </Link>
        </div>
      </div>
    ))}
    </div>
  )
}

export default ReportList;
