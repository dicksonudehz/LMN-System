import React from 'react';
import BundleBody  from './BundleBody'
import { BundleData } from './BundleData';
import Pagination from './Pagination';

function PostPerPage({post, loading, postPerPage}) {
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
      <Pagination postPerPage = {postPerPage} totalPost = {post.length}/>
      <hr horiLine/>
    </>
  );
}

export default PostPerPage;
