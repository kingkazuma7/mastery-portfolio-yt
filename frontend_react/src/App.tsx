import React, { FC } from "react";

import { Footer, Header, Skills, Work } from './container';
import { Navbar } from "./components";
import './App.scss';

const App: FC = (): JSX.Element => (
  <div className="app">
    <Navbar />
    <Header />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
