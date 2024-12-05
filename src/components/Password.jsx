import React from 'react'
import { useRef,useState } from 'react'
const Password = () => {
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
    <div className='bg-red-500 max-h-[700px] max-w-[700px] overflow-scroll rounded-[50px] p-[30px]'>
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
    <div className="flex justify-center items-center w-full h-full py-10">
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
    <table className="min-w-full table-auto text-sm text-gray-700">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-6 py-4 text-left">Website URL</th>
          <th className="px-6 py-4 text-left">Username</th>
          <th className="px-6 py-4 text-left">Passwords</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {savePassword.map((item, index) => (
          <tr
            key={index}
            className={`transition-all duration-300 hover:bg-blue-50 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            <td className="px-6 py-4">{item.site}</td>
            <td className="px-6 py-4">{item.username}</td>
            <td className="px-6 py-4">{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  
    </div>
  )
}

export default Password
