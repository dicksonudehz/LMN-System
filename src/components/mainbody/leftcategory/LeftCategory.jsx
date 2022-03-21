import './leftcategory.css';
import { Remove, Add} from '@material-ui/icons';
import {useState} from 'react';

function LeftCategory({checkboxdata}) {
    console.log(checkboxdata);
    const [isopen, setIopen] = useState(false);
    const  showContent = () =>{
        setIopen(!isopen);
    }
  return (
    <>
    <div className="MainLeftContainer" >
        <div className="headerContainer" onClick={showContent}>
            <h5>{checkboxdata.header}</h5>
        <div className="collapseIconos">
            {isopen ?  <Remove /> : <Add />}
        </div>
        </div>
       {isopen &&
       <label className='checkboxContainer'>
           <div className="checkboxcontainerItem">
           <input type="checkbox" />
           <h5>{checkboxdata.checkboxtype1}</h5>
           </div>
           <div className="checkboxcontainerItem">
           <input type="checkbox" />
           <h5>{checkboxdata.checkboxtype2}</h5>
           </div>
           <div className="checkboxcontainerItem">
           <input type="checkbox" />
           <h5>{checkboxdata.checkboxtype3}</h5>
           </div>
           <div className="checkboxcontainerItem">
           <input type="checkbox" />
           <h5>{checkboxdata.checkboxtype4}</h5>
           </div>
           <div className="checkboxcontainerItem">
           <input type="checkbox" />
           <h5>{checkboxdata.checkboxtype5}</h5>
           </div>
        </label>
        }
        <hr className="horizontalLine" />
        </div>
    </>
  );
}

export default LeftCategory;
