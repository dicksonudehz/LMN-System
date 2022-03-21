import './rightcategory.css';
import {ArrowForward, MoreHoriz, Remove, AccessTime, Star, Add} from '@material-ui/icons';

function RightCategory({coursedescriptiondata}) {
  return (
    <div>
      {/* <div className="mainHeaderContainer">
          <div className="featureHeader">feature category</div>
          <div className="showAllContainer">
            <ArrowForward className='arrowPointer'/>
           <p>show all</p>
           </div>
      </div> */}
<div className="wrapImgContainer">
      <div className="mainContainerImageHolder">
          <div className="imgContainerDes">
              <img src="/assets/9.jpg" alt="" className="imgHolder" />

              <div className="desContainer">
                  <p>this is a test</p>
                  <p>Web prgramming and  Apache Basics</p>
              </div>

              <hr className='horizontalLine'/>

              <div className="durationDes">
                  <div className="timeDes">
                      <AccessTime className='timeIcon'/>
                      <span>6hours</span>
                  </div>
                  <p>free</p>
              </div>
          </div>
          <div className="mainOverlaycontainer">
              <div className="maingpersonalprofile">
          <img src="assets/6.jpg" alt="personal profile image" className="personalProfile" />
          <p>demo instructor</p>
          </div>
          <div className="courseDesContainer">
              <h3 className="header">Web Coding and Apache Basics</h3>
              <p>The wordPress plugin is a part of the 
                  Masterstudy wordPress theme for the 
                  education business. Upgrading to the theme is
                  optional but does come with...
              </p>
          </div>

          <div className="desItemContianer">
              <div className="desitem">
              <Remove className='iconsitems' />
              <h2>Beginner</h2>
              </div>
              <div className="desitem">
              <Remove className='iconsitems'/>
              <h2>lectures</h2>
              </div>
              <div className="desitem">
              <AccessTime className='iconsitems' />
              <h2>6 hours</h2>
              </div>

          </div>
          <button className="buttonContainer">preview this course</button>

          <div className="courseStatusContainer">
              <div className="reactContainer">
              <Star /> <p>add wish list</p>
              </div>
              <h3>free</h3>
          </div>
      </div>
      </div>
      
    {/* end of the container */}
   
      </div>
    
    
      </div>
  );
}

export default RightCategory;
