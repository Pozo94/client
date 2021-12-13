import React from 'react';
import {useParams,useNavigate,useLocation} from "react-router-dom";
import Modal from "../Modal";



const    StreamDelete= (props)=> {
    const {id} =useParams();
    const navigate=useNavigate();
    return(

        <div className='test'>
            {id}
        <Modal/>
        </div>)

}
export default StreamDelete;