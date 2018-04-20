import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../../actions/book';
import PropTypes from 'prop-types';

import Onebook from '../../components/Books/OneBook';

class OneBook extends Component {



  /*onHeaderClick = (bookId) => {
    return (e) => {
      const visibleNote = this.state.visibleNote === bookId ? null : bookId;
      this.setState({ visibleNote });
    }
  }*/
  componentDidMount() {
    const { dispatch } = this.props;
    const par = this.props.match.params.id;
    console.log(par);
    dispatch(fetchBook(par));
  }

  render() {
    const { isFetching, isDone, book } = this.props;
    console.log(book);

    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }


    return (
      <section>
        <ul>
        <Onebook
          key={book.id}
          title={book.title}
          author={book.author}
          published={book.published}
          isbn13={book.isbn13}
          categorytitle={book.categorytitle}
          description={book.description}
          pagecount={book.pagecount}
          language={book.language}
        //  onHeaderClick={(this.onHeaderClick(book.id))}
        />
        </ul>
      </section>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.book.isFetching,
    isDone: state.book.isDone,
    book: state.book.book,
    error: state.book.error,
  }
}

export default connect(mapStateToProps)(OneBook);
