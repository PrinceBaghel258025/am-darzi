import './App.css';
import Authentication from './common/Authentication';
import Footer from './common/Footer';
import ImageGrid from './common/ImageGrid';
import Navbar from './common/Navbar';
import SingleHeadImg from './common/SingleHeadImg';
import SubscribeUs from './common/SubscribeUs';
import Sustainable from './common/Sustainable';
import NewProducts from './pages/NewProducts';

function App() {
  return (
    <div className="App">
      

      <Navbar/>
      <Authentication />
      <SubscribeUs/>
      <SingleHeadImg/>
      <Sustainable/>
      <ImageGrid/>
      <NewProducts/>
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
