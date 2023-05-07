import React, { FC } from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from "./components";
import './App.scss';

const App: FC = (): JSX.Element => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
