import './bundlebodycontainer.css';
import { BundleData } from './BundleData';
import {useState, useEffect} from 'react';
import PostPerPage from './PostPerPage';
import Pagination from './Pagination';



function BundleBodyContainer() {


  const [data, setData] = useState([]);
  const [postPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

useEffect(()=>{
  const fetchPost = () =>{
    setLoading(true)
    setData(BundleData)
  }
  fetchPost();
  setLoading(false)
}, []);

console.log(data);
//  Get current post
const indexOfLastPost = currentPage * postPerPage;
const indexOfFirstPost = indexOfLastPost - postPerPage;
const currentPost = data.slice(indexOfLastPost, indexOfFirstPost);

const paginate = (pageNumber) => setCurrentPage(pageNumber);
   return (
    <>
    <PostPerPage  data ={currentPost} loading = {loading}/>
    <Pagination postPerPage = {postPerPage} totalPost = {data.length} paginate ={paginate}/>
    </>
  );
}

export default BundleBodyContainer;
