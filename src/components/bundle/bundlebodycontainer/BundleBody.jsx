import './bundlebody.css';

function BundleBody({data, loading}) {
    if(loading){
        <h1>Page Loading</h1>
    }
  return (
   <>
    <div className="mainBodyContainer">
        <div className="containerHeader">
            <h3>{data.bundle_title}</h3>
            <p>{data.bundle_course_number}</p>
        </div>
        <div className="mainItemHolder">
        <div className="ItemsHolder">
        <img src={data.bundle_img} alt="course image" className="itemImg" />
            <div className="itemHeader"><h3>{data.bundle_description}</h3></div>
            <div className="itemPrice">{data.bundle_price}</div>
            </div>
            <hr className='horinzontalLine'/>
            <div className="ItemsHolder">
            <img src="assets/7.jpg" alt="course image" className="itemImg" />
            <div className="itemHeader"><h3>how to be a DJ? make your own electronic music</h3></div>
            <div className="itemPrice">$45</div>
            </div>
            <hr className='horinzontalLine'/>
            <div className="ItemsHolder">
            <img src="assets/8.jpg" alt="course image" className="itemImg" />
            <div className="itemHeader"><h3>how to be a DJ? make your own electronic music</h3></div>
            <div className="itemPrice">$60</div>
            </div>
            <hr className='horinzontalLine'/>
            <div className="ItemsHolder">
            <img src="assets/3.jpg" alt="course image" className="itemImg" />
            <div className="itemHeader"><h3>how to be a DJ? make your own electronic music</h3></div>
            <div className="itemPrice">$50</div>
            </div>
            <hr className='horinzontalLine'/>
        </div>
        </div>
   </>
  )
}

export default BundleBody
