import  './footer.css';
import { Facebook, Instagram, Twitter} from "@mui/icons-material";

function Footer() {
  return (
    <div className="footerContainer">
        <div className="footerItems">
            <span className="footHeader">
                about us
            </span>
            <div className="footerHeaderItem">
            <p>
                Masterstudy is Education WordPress theme <br />
                featured by Learning Management System (LMS)<br />
                for online education. Developed by StylemixThemes<br />
            </p>
            <div className="footerItemIcon">
                <Facebook  className='footerItemIconItem' />
                <Twitter className='footerItemIconItem'/>
                <Instagram className='footerItemIconItem' />
            </div>
        </div>
        </div>
        <div className="footerItems">
            <span className="footHeader">
                contact us
            </span>
            <div className="footerHeaderItem">
            <p>USA, Callifornia 20, <br />
            First Avenue, Callifornia
            </p>
            <p>
            +1 212 458 300 32 <br/>
            +1 212 375 24 14
            </p>
            <div className="footerItemEmail">
                info@learningsystemcommunity.com
            </div>
            </div>
        </div>
        <div className="footerItems">
            <span className="footHeader">
                pages
            </span>
            <div className="footerHeaderItem">

            <div className="footerHeaderItem0">
            <ul className='footerHeaderList1'>
                <li>blog</li>
                <li>home</li>
                <li>shortcodes</li>
            </ul>
            <ul className='footerHeaderList2'>
                <li>course</li>
                <li>membership</li>
                <li>typography</li>
            </ul>
            </div>

        </div>
        </div>
        <div className="footerItems">
            <span className="footHeader">
                pages
            </span>
            <div className="footerHeaderItem">
                <div className="footerBlog">
                    <img src="/assets/course-6.jpg" alt="blog profile" className='footerImage' />
                    <p>industry. Lorem Ipsum has been the<br />
                        industry's standard dummy text<br />
                        dummy text ever since the 1500s,<br />
                        when an unknown printer<br />
                        took a galley of type and scrambled it<br />
                        to make a type specimen book. It has<br />
                        survived not only five centuries,<br />
                        but also the leap into electronic</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer