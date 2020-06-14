import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './carousel';
import styles from './main.module.scss';
import { pictures } from './data/data';

function App() {
  return (
    <div className="App">
      <nav className={styles.nav}>Max Snow Working Hard</nav>
      <Carousel width={1000}>
          {pictures.map((item, key) =>
            <span key={key}>
                <img src={item.url} />
                {item.caption}
            </span>
          )}
      </Carousel>
    </div>
  );
}

export default App;
