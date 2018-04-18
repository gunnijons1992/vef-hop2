import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {

    /* todo birta mismunandi upplýsingar ef innskráður notandi eða ekki */

    return (
      <div>
        <h2>Velkominn á bókasafnið</h2>
        <p>Til þess að njóta bókasafnsins til fullnustu mælum við með að <Link to="/login">Skrá sig inn.</Link>
        Þanngað til getur þú skoðað <Link to="/books"> allar bækurnar </Link> </p>
      </div>
    );
  }
}

/* todo setja upp tengingu við redux til að vita stöðu notanda */
export default Home;
