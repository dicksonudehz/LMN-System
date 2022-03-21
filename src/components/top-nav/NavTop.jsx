import  './navtop.css'
import { Twitter, Instagram, Language, GitHub, LinkedIn, Pinterest } from "@material-ui/icons";


function NavTop() {
  return (
      <>
    <div className="top-navbar-container">
        <div className="top-Nav-Bar-Left">
            <ul className="language-list">
                    <select name="English" id="" className="list-item">
                        <option value="Francia" className="list-items">English</option>
                        <option value="Francia" className="list-items">French</option>
                        <option value="Francia" className="list-items">Espanol</option>
                        <option value="Francia" className="list-items">German</option>
                    </select>
                </ul>
        </div>
        <div className="top-Nav-Bar-Middle"> 
            <ul className="top-Nav-Bar-Middle-item">
                <li className="top-Nav-Bar-Middle-Items">courses</li>
                <li className="top-Nav-Bar-Middle-Items">zoom</li>
                <li className="top-Nav-Bar-Middle-Items">pages</li>
                <li className="top-Nav-Bar-Middle-Items">bundle</li>
                <li className="top-Nav-Bar-Middle-Items">add course</li>
            </ul>
         </div>
        <div className="top-Nav-Bar-Right"> 
        <div className="list-icon">
            
             <Twitter  className="list-icons" />
            
            
            <Instagram  className="list-icons"/>
            
            
            <Language  className="list-icons"/>
            
            
            <GitHub  className="list-icons"/>
            
            
            <LinkedIn className="list-icons" />
            
            
            <Pinterest className="list-icons" /> 
            
        </div>
         </div>
         
    </div>
    <hr className="top-line" />
    </>
  )
}

export default NavTop
