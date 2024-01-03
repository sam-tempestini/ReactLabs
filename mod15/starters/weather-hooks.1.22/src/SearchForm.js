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
                <div className="col">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;
