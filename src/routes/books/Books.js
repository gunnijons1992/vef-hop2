import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/books';

import Book from '../../components/Books/Book';

const queryString = require('query-string');

class Books extends Component {


  /*onHeaderClick = (bookId) => {
    return (e) => {
      const visibleNote = this.state.visibleNote === bookId ? null : bookId;
      this.setState({ visibleNote });
    }
  }*/
  componentDidMount() {
    const { dispatch } = this.props;
    const query = this.props.location.search;

    const parsedQuery = queryString.parse(query);

    if (query) {
      dispatch(fetchBooks(`books?search=${parsedQuery.search}`));
    }
    else {
      dispatch(fetchBooks(`books`));
    }
  }

  render() {
    const { isFetching, books } = this.props;

    //console.log(books);


    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section>
        <h2>Minnisatriði</h2>
        <ul>
          {books.map((book) => {
            return (
              <a href={"/books/"+ book.id}><Book
                key={book.id}
                title={book.title}
                author={book.author}
              //  onHeaderClick={(this.onHeaderClick(book.id))}
              /></a>
            )
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.books.isFetching,
    books: state.books.books,
    error: state.books.error,
  }
}

export default connect(mapStateToProps)(Books);
