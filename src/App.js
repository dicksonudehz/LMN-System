import './App.css';
import Categories from './components/sidebar/category/Categories';
import Footer from './components/footer/Footer';
import MainBody from './components/mainbody/MainBody';
import NavHeader from './components/navheader/NavHeader';
import Login from './components/sidebar/login/Login';
import MainSidebar from './components/sidebar/mainSidebar/MainSidebar';
import Middle_Nav from './components/top-nav/middle-nav/Middle_Nav';
import NavTop from './components/top-nav/NavTop';

function App() {
  return (
  <>
  <NavTop />
  <Middle_Nav />
  <NavHeader />
  <MainBody />
  <Footer />
    </>
  );
}

export default App;
