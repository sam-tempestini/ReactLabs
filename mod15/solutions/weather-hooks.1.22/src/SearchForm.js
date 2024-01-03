import React from 'react';

const SearchForm = (props) => {
    return (
        <form className="form-inline" onSubmit={props.getWeather}>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Enter city" name="city" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Enter country" name="country" />
                </div>
                <button className="btn btn-primary">Search</button>
            </div>
        </form>
    )
}

export default SearchForm;
