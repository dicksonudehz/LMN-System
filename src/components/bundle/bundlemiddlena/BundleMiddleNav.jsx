import './bundlemiddlenav.css';
import { Search, Dehaze, BusinessCenter, Person,
    ChevronRight, FavoriteBorder  } from "@material-ui/icons";

function BundleMiddleNav() {
  return (
  <>
   <div className="middle-nav-container">
        <div className="middle-nav-left">
          <img
            src="/assets/masterkey.png"
            alt="main logo element"
            className="logo"
          />

          <div className="splitBarsInputContainer">
            <div className="splitBars"><Dehaze /></div>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search Courses"
                className="searchInputBar"
              />
              <div className="search"> <Search  /> </div>
            </div>
          </div>
        </div>
        <div className="middle-nav-middle">
          <div className="middleNavContainer">
            <div className="campaignIcon">
              <BusinessCenter className='middleNavIcons'/>
              <span className="items">Become an instructor</span>
            </div>
            <div className="campaignIcon">
              <BusinessCenter className='middleNavIcons' />
              <span className="items">For Enterprise</span>
            </div>
          </div>
        </div>
        <div className="middle-nav-right">
          <div className="rightNavContainer">
            <Person className='rightNavicon' />
            <span className="loginbutton">Log in</span>
            <span className="buttonIcon">Sign Up</span>
            <FavoriteBorder className='heartIcon'/>
          </div>
        </div>
      </div>
      {/* <hr className="top-line" /> */}
  </>
  );
}

export default BundleMiddleNav;
