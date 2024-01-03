import React from 'react'

const Results = (props) => {
    const styleObj = {
        color: 'green'
    };
    
    return (
        <div className="result" style={styleObj}>
            <p>{props.result}</p>
        </div>
    )
}

export default Results
