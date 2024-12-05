import React from 'react'
import { useRef,useState } from 'react'
const Manager = () => {
    const [data,setData]=useState({site:"",username:"",password:""});
    const [savePassword,setSavePassword]=useState([]);
    function handleAdd(){
     const savedData=JSON.parse(localStorage.getItem('passwordData')||JSON.stringify([]));
     const updatedData=[...savedData,data]
      setSavePassword(updatedData);
      localStorage.setItem('passwordData', JSON.stringify(updatedData));
    
    }
    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    const [isHidden,setIsHidden]=useState(true);
    function handleClick(){
        setIsHidden(!isHidden);
    }
    return (
    <div className='bg-red-400 flex flex-col items-center justify-center px-10 py-10 max-h-[800px] overflow-scroll'>
    <div className='text-black w-400 flex flex-col gap-[20px] items-center justify-center'>
        <input onChange={handleChange} value={data.site} name="site"className='w-full' type='text' placeholder="enter website url" ></input>
            <div className='flex gap-10'>
            <input onChange={handleChange} value={data.username} name="username"className='w-40' type='text' placeholder="enter username" ></input>
            <div className='w-auto h-auto'>
            <input onChange={handleChange} value={data.password}name="password" className='w-40 h-auto' type='password' placeholder="enter password" >
            </input>
            <img  onClick={handleClick}className='relative top-[-25px] right-[-120px]'width={25} src={isHidden==true?"../../public/hide.png":"../../public/show.png"}></img>
            </div>
          
           
            </div>
            <button onClick={handleAdd} className='border border-red-300 text-white p-2'>Add Password</button>
           
    </div>
    <div className='text-white'>No passwords to show</div>
    <table class="table-auto">
  <thead>
    <tr>
      <th>Website url</th>
      <th>Usename</th>
      <th>Paswords</th>
    </tr>
  </thead>
  <tbody>
    {savePassword.map((item)=>{
       return(<tr>
       <td>{item.site}</td>
       <td>{item.username}</td>
       <td>{item.password}</td>
     </tr>)
    })}
   
  </tbody>
</table>
  
    </div>
    
  )
}

export default Manager
