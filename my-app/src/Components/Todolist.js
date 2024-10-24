import React, { useState } from 'react'
// import img1 from '../assets/img3.png';
import { FaFilePdf } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Todolist() {
  const [input,setinput] = useState('');
  const [item , setItem] = useState([]);

  const additem = () =>{
    if(!item){
  
    }else{
      setItem([...item,input]);
      setinput('');
    }
  };
  const delitem = () =>{
    // setI/tem([])
  };
  return (
    
    <>
    <i class="fa-thin fa-plus"></i>
      <div className='main-div'>
     <div className='child-div'>
     {/* key + ; (semicolon) for emojiessssssssssssss */}
     <div className='icon'>
            {/* <img className='img1' src={img1} alt=''/> */}
            <FaFilePdf size={100}/>
        </div>
        <div>
        <figcaption className='caption'>Add Your List Here ✌</figcaption>
        </div>
        <div className='inp'>
            <input className='inp1' type='text' placeholder='Add Items 🧡😉' value={input}
            onChange={(e)=> setinput(e.target.value)}
            />
            <FaPlus className='plus'onClick={additem} />
        </div>
        <div className='showItem'>
          {
            item.map((elem,id)=>{
             return(
              <div className='addItem' value={id}>
              {elem}
                  <MdDelete className='plus1' />
 
            </div>
             )
            })
          }
        </div>
        <div className='btn'onClick={delitem}> delete items</div>
     </div>
      </div>
    </>
  )
}

export default Todolist
