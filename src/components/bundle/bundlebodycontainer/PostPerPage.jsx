import React from 'react';
import BundleBody  from './BundleBody'
import { BundleData } from './BundleData';



function PostPerPage({data, loading, postPerPage}) {
    if(loading){
        <h1>
            Loading...
        </h1>
    }
    
  return (
    <>
    <div className="mainBundleHolder">
          {
        BundleData.map(bundledata =>{
          return <BundleBody key={bundledata.id}  data = {bundledata} />
        })
      }
      </div>
      
      <hr horiLine/>
      
    </>
  );
}

export default PostPerPage;
