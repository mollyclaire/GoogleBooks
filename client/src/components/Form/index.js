import React from "react";
// import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="bookSearchLabel"><h3>Search for a Book</h3></label>
                <br></br>
                <input 
                    className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Search for book by title"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm;
