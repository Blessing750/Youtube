import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import FeaturedVideos from './components/FeaturedVideos';
import Shorts from './components/Shorts';
import OtherVideos from './components/OtherVideos';
import OtherVideos2 from './components/OtherVideos2';
import OtherVideos3 from './components/OtherVideos3';
import BreakingNews from './components/BreakingNews';


function App() {
  return (
    <div className="App">
     <div className="container-fluid">
     <Header/>
  <div className="row rw1">
  <div className="col-md-1">
    <i className="fa fa-home hm"></i><p className="para">Home</p>
    <i className="fa fa-bolt cle"></i><p className="sho">Shorts</p>
  <i className="fa fa-video cle"></i><p>Subscription</p>
  <i className="fa fa-video cle"></i><p className="sho">Library</p>
 
  </div>
  
  <Categories/>
  </div>

<FeaturedVideos/>
<hr />
<div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-11">
  <i className="fa fa-bolt bot"></i><p className="short">Shorts</p>
</div>
</div>
<Shorts/>

    
<hr />

<OtherVideos/>

<OtherVideos2/>

<OtherVideos3/>

<hr/>
<div className="row">
<div className="col-md-1"></div>
<div className="col-md-11">
<h5>Breaking News</h5>
</div>
</div>
<BreakingNews/>
</div>
</div>
    
  );
}

export default App;
