import './categories.css';
import { Brush, SportsBasketball, MusicOff, DesignServices, DragHandle, DeveloperMode
 } from '@material-ui/icons';
//  import {useState } from './react';


function Category() {
    // useState[sidebar, setSidebar] = useState(false);
    // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    {/* <div className={ sidebar ?' mainCategoriesContainer active' : 'mainCategoriesContainer'}> */}
    <div className="mainCategoriesContainer">
      <div className="containerItems">
     <div className="mainItemsContainer">
       <h4>art</h4> <Brush className='mainItem' />
     </div>
     <div className="mainItemsContainer">
       <h4>exercise</h4> <SportsBasketball className='mainItem'/>
     </div>
     <div className="mainItemsContainer">
       <h4>material design</h4> <DragHandle className='mainItem' />
     </div>
     <div className="mainItemsContainer">
       <h4>music</h4> <MusicOff className='mainItem'/>
     </div>
     <div className="mainItemsContainer">
       <h4>software engineering</h4> <DeveloperMode className='mainItem' />
     </div>
      </div>
    </div>
    </>
  );
}

export default Category;
