import './navheader.css';
import { GridOn, FormatListBulleted} from "@material-ui/icons";

function NavHeader() {
  return (
    <>
      <div className="navHeaderContainer">
        <div className="navHeaderContainerLeft">
          <div className="navHeaderContinerItem">courses</div>
        </div>
        <div className="navHeaderContainerRight">
              <div className="navheaderContainerRightSortItems">
                <span className="sortItems">sort by:</span>
              </div>
              <div className="navheaderContainerRightSortItems">
                <select name="sortContainer" className="navSelectionContainer">
                  <option value="Release date (newest first)" >Release date (newest first)</option>
                  <option value="release date (oldest first)" >Release date (oldest first)</option>
                  <option value="price high" >price high</option>
                  <option value="price low" >price low</option>
                  <option value="overall rating" >overall rating</option>
                </select>
              </div>
              <div className="navheaderContainerRightSortItems">
                   <GridOn className='navHeaderIcon' />
                    <FormatListBulleted className='navHeaderIcon'/>
              </div>
          </div>
      </div>
    </>
  )
}

export default NavHeader
