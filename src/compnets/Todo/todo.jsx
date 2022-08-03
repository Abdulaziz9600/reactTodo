import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const [namedata, setData] = useState("");
  const [dataauthor, setDataauthor] = useState("");
  const [dataprice, setDataprice] = useState("");
  
  const [datapost, setDatapost] = useState([
    {
      id:1,isname:"Martin Iden",author:"John",price:200
    }
  ]);
  
  const check ={
    name:namedata.trim().length===0,
    price:dataprice.trim().length===0,
    author:dataauthor.trim().length===0,
  }
  
  const addElemnt = ()=>{
    if (check.name || check.price || check.author) {
      toast.error("Hech narsa kirtmandigiz");
    }
    
    else {
      const item = {
        id: Date.now(),
        isname:namedata,
        author:dataauthor,
        price:dataprice
      }
      
      setDatapost([...datapost,item]);
      setDataauthor("")
      setDataprice("")
      setData("")
      
      
      toast.success("Mufaqyatli qoshildi")
      
    }
    
  }
  return (
    <div className="continer">
    
    <ToastContainer/>
    
    <div className="pt-5 d-flex flex-column gap-3 justify-content-center w-50 mx-auto">
    <input
    type="text"
    className="w-50 rounded p-1" placeholder="Kitob Nomni kirting" value={namedata}
    onChange={(e)=>setData(e.target.value)} 
    />
    
    <input type="text" className="w-50 rounded p-1" placeholder="Kitob Mualifi kirting" value={dataauthor}
    onChange={(e)=>setDataauthor(e.target.value)}  />
    
    <input type="text" className="w-50 rounded p-1" placeholder="Kitob Narxi kirting" value={dataprice}
    onChange={(e)=>setDataprice(e.target.value)}  />
    
    <button className="btn btn-primary w-50" onClick={()=> addElemnt()}>Add</button>
    </div>
    
    
    <table className="table table-striped table-hover w-50 mt-5">
    <thead>
    <tr>
    <th>id</th>
    <th>Book name</th>
    <th>Book price</th>
    <th>Control</th>
    </tr>
    </thead>
    
    {/* <tbody>
    <tr>
    <td>1</td> <td>Martin</td> <td>100</td>
    <td>
    <button className="btn btn-danger">Delete</button>
    </td>
    </tr>
  </tbody> */}
  <tbody>
  
  {datapost.map((item,idx)=>{
    
    return  <tr key={item.id}>
    <td>{idx}</td> <td>{item.isname}</td> <td>{item.author}</td><td>{item.price}</td>
    <td>
    <button className="btn btn-danger">Delete</button>
    </td>
    </tr>
    
  }
  )}
  </tbody>
  </table>
  </div>
  );
};

export default Todo;
