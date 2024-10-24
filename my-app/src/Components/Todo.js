import React,{useState} from 'react'
import { FaFilePdf } from "react-icons/fa";
function Todo( ) {

    const[btn ,setBtn] = useState ('Check List');
    const [inputdata, setInputdata] =  useState('');
    const [item , setItem] = useState ([]);


    const handleClick = () =>{
        console.log('Check List');
        setBtn('Delete Item');
    }
// three dots is used to store the previous value like item called spread operator
    const addItem =() =>{
//this func tion do not add the empty spaces in array if we add then show otherwise the input is empty and show previous value
        if(!inputdata){

        }else{
        setItem([...item,inputdata]);
        // after writing anything in the input data we take a emply input
        setInputdata('')
        }};

        const delItem = (ind) =>{
          console.log(ind);
          // const updatedItem = item.filter((elem,i)=>{
          //    return ind != i
          // });
          // setItem(updatedItem);
        }

        const RemoveItem = () =>{
          setItem([]);
        }
  return (
    <>
      <div className='maindiv'>
      <div className='child-div'>
        <figure>
        <FaFilePdf size={120}/>
        <figcaption className='caption'>Add Your List Here 🧻✌</figcaption>
        </figure>

        <div className='addItem'>
        <input className='inp1' type='text' placeholder='Add Items 🧡😉 '
        value={inputdata} 
        // when we set value then we cannot write it we can add value we made a function onchange
        onChange={(e)=> setInputdata(e.target.value)}
       
        />
        <i class="fa-solid fa-plus " title='Add item' onClick={addItem}></i>
        </div>

          <div className='showItem'> 
    
  {/* create a new array by calling and exsisting array it is used to loop in array */}
   {/* array.map(function(index, arr , value ) this value)  */}
           { item.map((elem, i)=>{
                return(
                    <div className='eachitem' value={i} >
                    <h3>
                        {elem}
                    </h3>
                    <i class="fa-regular fa-trash" title='Delete item' onClick={delItem}></i>
                  </div>
                )
            })
        }
          </div>
          <div>
        <button className='btn' onClick={handleClick} onDoubleClick={RemoveItem}>
        {btn}
        </button>
       </div>
      </div>
      </div>
      
    </>
  )
}

export default Todo
