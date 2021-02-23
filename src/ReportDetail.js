import React from 'react';

const ReportDetail = props => {
    const foundReport = props.reportList.find(report => {
        return report.id === props.match.params.id;
    })
    console.log(props.match.params.id);
    console.log(foundReport);
    return (
        <div>
            <div className="image-text-wrapper">
                <h2 className="image-text">{foundReport.title}</h2>
                <img src={foundReport.imageUrl} alt="Report" />
            </div>
            <div className="description">
                <h2>{foundReport.summary}</h2>
            </div>
            <a href={foundReport.url}>
              <button className="myButton">Read More</button>
            </a>
        </div>
    )
}

export default ReportDetail;
