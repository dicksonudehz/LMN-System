import {useState } from 'react';
import './mainsidebar.css';
import {ViewHeadline } from '@material-ui/icons';


function MainSidebar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar( !sidebar);

  return (
   <>
   <div className={sidebar ? 'mainSidebarContainer active ' : 'mainSidebarContainer'}>

   <ViewHeadline className='togleBar' onclick={showSidebar} />

       <div className= 'sidebarContainerMenu '>
           <ul className="mainMenu">
             <li className="menuItems">login </li>
             <li className="menuItems">categories </li>
           </ul>
       </div>
       
   </div>

   </>
  );
}

export default MainSidebar;
