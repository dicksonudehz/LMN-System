import './bottommiddlenav.css';
import { Search, Dehaze, BusinessCenter, Person,
    ChevronRight, FavoriteBorder  } from "@material-ui/icons";

function BottoMiddleNav() {
  return (
    <div>
      <div className="bottomNav">
        <div className="bottomNavLeft">
          <div className="bottomNavItems">
            <span className="bottomNavItem">lms sites</span>
            <ChevronRight className = 'bottomNavIcon'/>
          </div>
          <div className="bottomNavItems">
            <span className="bottomNavItem">white lms master - study</span>
            <ChevronRight className = 'bottomNavIcon'/>
          </div>
          <div className="bottomNavItems">
            <span className="bottomNavItem">Courses</span>
          </div>
        </div>
        <div className="bottomNavRight">right</div>
      </div>
    </div>
  );
}

export default BottoMiddleNav;
