import React from 'react';

const ReportDetail = props => {
    const foundReport = props.reportList.find(report => {
        return report.id === props.match.params.id;
    })
    console.log(props.match.params.id);
    console.log(foundReport);
    return (
      <div className="detail-container">
        <h2 className="detail-title">{foundReport.title}</h2>
        <img className="detail-image" src={foundReport.imageUrl} alt="Report" />
        <div className="detail-description">
          <p>{foundReport.summary}</p>
        </div>
        <a href={foundReport.url} target="_blank">
          <button className="detail-link">Read More</button>
        </a>
      </div>
    )
}

export default ReportDetail;
