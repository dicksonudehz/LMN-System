import './mainbody.css';
import {ArrowForward, MoreHoriz, Remove, AccessTime, Star, Add} from '@material-ui/icons';
import { RotateLeft} from '@material-ui/icons';
import RightCategory from './rightcategory/RightCategory';
import LeftCategory from './leftcategory/LeftCategory';
import { CheckboxData } from './leftcategory/CheckboxData';
import { CourseDescriptionData } from './rightcategory/CourseDescriptionData';


function MainBody() {
  return (
    <>
    <div className="mainContainer">
    <div className="mainCategoryContainer">
      <div className="leftContainer">
      
      {CheckboxData.map(checkbox =>{
         return <LeftCategory key={ checkbox.id } checkboxdata = {checkbox} />
        })}
        <div className="buttoncontainer">
        <button className="showResultButton">show result</button>
        <div className="resetContainer">
       <RotateLeft className='resetButton'/> <span>reset all</span>
       </div>
        </div>
      </div>
      <div className="rightContainer">
      <div className="mainHeaderContainer">
          <div className="featureHeader">feature category</div>
          <div className="showAllContainer">
            <ArrowForward className='arrowPointer'/>
           <p>show all</p>
           </div>
      </div>
      <div className="mainContainerItems">
      <div className="rightContainerItems">
        {CourseDescriptionData.map(coursedescription => {
       return<RightCategory key={coursedescription.id} coursedescriptiondata ={coursedescription}/>
        })}
        </div>
        <div className="buttonContaineritem">
        <button className="buttonContainer">load more</button>
        </div>
        </div>
      </div>
       </div>
       </div>
       <hr className='horLine'/>
    </>
  );
}

export default MainBody;
