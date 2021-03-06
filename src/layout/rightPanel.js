import React, { useState ,useEffect} from 'react'
import VerticalCard from './Card/VerticalCrad';
import HorizontalCard from './Card/HorizontalCard';
import './rightPanel.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from './Card/Pagination';

const url="https://jsonplaceholder.typicode.com/posts";
const RightPanel = (props) => {
    const{ stateChange}=props;
    const [users,setUsers]=useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const Cross=(id)=>{
        console.log(id);
        const newlist=users.filter((props)=>props.id!==id)
        setUsers(newlist)
      }
   
    const getUsers=async()=>{

        const response=await fetch(url);
        const users1=await response.json();
        setUsers(users1);
    }
    useEffect(()=>{
        getUsers();
      },[]);

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
    
      // Change page
      const paginate = pageNumber => setCurrentPage(pageNumber);




    return (
        <div>
       <div id="notes" className="  row container-fluid  ">
               
               {stateChange?<HorizontalCard users={currentPosts} 
                    Cross={Cross}
               />:<VerticalCard users={currentPosts} Cross={Cross}/>}

               </div>
<div className="pagination">


               <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}
        
      />
       </div>
           
        </div>
    )
}

export default RightPanel
