import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import SearchResult from "../components/SearchResult";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  // create initial state
  state = {
      search: "",
      books: [],
      error: "",
      message: ""
  };

  // function to take value of what is entered in the search bar
  handleInputChange = event => {
      this.setState({ search: event.target.value })
  }

  // function to control the submit button of the search form 
  handleFormSubmit = event => {
    event.preventDefault();
    // once it clicks it connects to the google book api with the search value
    API.getGoogleSearchBooks(this.state.search)
        .then(res => {
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            }
            else {
                // store response in an array
                let results = res.data.items
                // map through the array 
                results = results.map(result => {
                    // store each book information in a new object 
                    result = {
                        key: result.id,
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    return result;
                })
                // reset the state of the empty books array to the new arrays of objects with properties geting back from the response
                this.setState({ books: results, error: "" })
            }
        })
        .catch(err => this.setState({ error: err.items }));
}


handleSavedButton = event => {
  // console.log(event)
  event.preventDefault();
  console.log(this.state.books)
  let savedBooks = this.state.books.filter(book => book.id === event.target.id)
  savedBooks = savedBooks[0];
  API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err))
}

// renderResults = () => {
//   if (this.state.books) {
//     return <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
//   } else {this.setState({ message: "No results to display"})}
//   }


render() {
    return (
        <Container fluid>
            <Jumbotron>
                <h1 className="text-white">Search for Books using the GoogleBook API</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col size="12">
                        <Form
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container>
              {this.state.books.length ? (
                <SearchResult 
                  books={this.state.books} 
                  handleSavedButton={this.handleSavedButton} 
                  />
              ) : ( <h3>No Results to Display</h3>)}
                {/* {this.renderResults()} */}
            </Container>
        </Container>
    )
}


}


export default Search;
