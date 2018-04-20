import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/books';
import { NavLink } from 'react-router-dom';

import Book from '../../components/Books/Book';
import button from '../../components/button'

import './Books.css';

const queryString = require('query-string');


class Books extends Component {

  state = {
    offset: 0,
  }

  /*onHeaderClick = (bookId) => {
    return (e) => {
      const visibleNote = this.state.visibleNote === bookId ? null : bookId;
      this.setState({ visibleNote });
    }
  }*/
  componentDidMount() {
    const { dispatch } = this.props;
    const query = this.props.location.search;
    //console.log(this.props.location.offset);
    const parsedQuery = queryString.parse(query);
    const par = this.props.match;
    if (query) {
      dispatch(fetchBooks(`books?search=${parsedQuery.search}`));
    }
    else {
      dispatch(fetchBooks(`books?offset=${this.state.offset}`));
    }
  }

  handleNextPage = async () => {
    //let offset = 10;
    this.setState({offset: this.state.offset + 10});
    this.setState({loading: true});
    const { dispatch } = this.props;
    await dispatch(fetchBooks(`books?offset=${this.state.offset}`));
  }

  handlePreviousPage = async () => {
    //let offset = 10;
    if(this.state.offset !== 0){
    this.setState({offset: this.state.offset - 10});
    this.setState({loading: true});
    const { dispatch } = this.props;
    await dispatch(fetchBooks(`books?offset=${this.state.offset}`));
  }
  }


  render() {
    const { isFetching, books } = this.props;

    console.log(books);


    if (isFetching) {
      return (
        <p>Sæki Bækur..</p>
      );
    }

    return (
      <section>
        <h2>Bækur</h2>
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
        <button className="button" onClick={this.handlePreviousPage}>
        <NavLink exact className="header_link"
        // eslint-disable-next-line
          to={`/books?offset=${this.state.offset-10}`} className="next">
          Fyrri síða
        </NavLink>
        </button>
        <button className="button" onClick={this.handleNextPage}>
        <NavLink exact className="header_link"
        // eslint-disable-next-line
          to={`/books?offset=${this.state.offset+10}`} className="next">
          Næsta síða
        </NavLink>
        </button>
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
