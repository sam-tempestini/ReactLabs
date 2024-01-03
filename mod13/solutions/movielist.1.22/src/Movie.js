import React from 'react'

const Movie = (props) => {
    const {poster, name, description, year} = props.movie;
    return (
        <div className="card">
            <div className="image">
                <img src={poster} alt={name} />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">
                    {description}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    Released in {year}
                </span>
            </div>
        </div>
    )
}

export default Movie;
