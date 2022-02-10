import './App.css';
import Footer from './components/footer/Footer';
import MainBody from './components/mainbody/MainBody';
import NavHeader from './components/navheader/NavHeader';
import Middle_Nav from './components/top-nav/middle-nav/Middle_Nav';
import NavTop from './components/top-nav/NavTop';

function App() {
  return (
    <div className="App">
      <NavTop />
      <Middle_Nav />
      <NavHeader />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
