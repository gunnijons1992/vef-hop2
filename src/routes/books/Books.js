import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/books';

import Book from '../../components/books/Book';

class Books extends Component {

  state = {
    visibleNote: null,
  }

  /*onHeaderClick = (bookId) => {
    return (e) => {
      const visibleNote = this.state.visibleNote === bookId ? null : bookId;
      this.setState({ visibleNote });
    }
  }*/
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBooks());
  }

  render() {
    const { isFetching, books } = this.props;
    console.log(books);

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
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
              //  onHeaderClick={(this.onHeaderClick(book.id))}
              />
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
