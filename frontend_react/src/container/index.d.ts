declare module '@/container' {
  import About from './About/About';
  import Header from './Header/Header';
  import Footer from './Footer/Footer';
  import Navbar from '@/components/Navbar/Navbar';

  export interface Container {
    About: typeof About;
    Header: typeof Header;
    Footer: typeof Footer;
    Navbar: typeof Navbar;
  }
}

declare const container: {
  About: typeof import('./About/About').default;
  Header: typeof import('./Header/Header').default;
  Footer: typeof import('./Footer/Footer').default;
  Navbar: typeof import('@/components/Navbar/Navbar').default;
};

export default container;
