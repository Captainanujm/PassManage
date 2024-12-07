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
      setData({ site: "", username: "", password: "" });
    
    }
    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    const [isHidden,setIsHidden]=useState(true);
    function handleClick(){
        setIsHidden(!isHidden);
    }
    function handleCopy(item){
      
    }
  return (
    <div className="flex p-2 min-w-[720px] max-w-[720px] min-h-[610px] max-h-[610px]  justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="bg-white min-w-[710px] max-w-[710px] min-h-[600px] max-h-[600px] shadow-2xl rounded-3xl p-10 flex flex-col">
    <div className="text-black flex flex-col gap-6 items-center justify-center mb-10">
      <h1 className="text-3xl font-semibold text-indigo-700 mb-4">PassManage</h1>
      
      <div className="w-full space-y-4">
        <input
          onChange={handleChange}
          value={data.site}
          name="site"
          className="w-full p-4 rounded-xl border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Enter Website URL"
        />
        <div className="flex gap-6">
          <input
            onChange={handleChange}
            value={data.username}
            name="username"
            className="w-1/2 p-4 rounded-xl border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter Username"
          />
          <div className="relative w-1/2">
            <input
              onChange={handleChange}
              value={data.password}
              name="password"
              className="w-full p-4 rounded-xl border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type={isHidden ? "password" : "text"}
              placeholder="Enter Password"
            />
            <img
              onClick={handleClick}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              width={20}
              src={isHidden ? "../../public/hide.png" : "../../public/show.png"}
              alt="toggle visibility"
            />
          </div>
        </div>
        
        <button
          onClick={handleAdd}
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-xl hover:bg-indigo-700 focus:outline-none active:scale-95 active:opacity-105"
        >
          Add Password
        </button>
      </div>
    </div>
    
   <div className=" max-h-[900px] max-w-[1000px] overflow-auto scrollbar-hide">
   <table class="table-auto w-full border-collapse border border-gray-300 text-sm text-left shadow-lg rounded-lg overflow-hidden">
  <thead class="bg-indigo-600 text-white">
    <tr>
      <th class="px-6 py-4">Website URL</th>
      <th class="px-6 py-4">Username</th>
      <th class="px-6 py-4">Password</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-200">
  
  
  {savePassword.map((item, index) => {
  return (
    <tr class="hover:bg-indigo-50 transition-colors">
     
      <td class="px-6 py-4">
      <div className='flex items-center'>
        <span>{item.site}</span>
        <img className="w-5 h-5" src='../../public/copy_10573585.png'/>
      </div>
      </td>
      <td class="px-6 py-4">
      <div className='flex items-center'>
        <span>{item.username}</span>
        <img className="w-5 h-5" src='../../public/copy_10573585.png'/>
      </div>
      </td>
      <td class="px-6 py-4">
      <div className='flex items-center'>
        <span>{item.password}</span>
        <img className="w-5 h-5" src='../../public/copy_10573585.png'/>
      </div>
      </td>
   
  </tr>
  )
})}
    
    
    
  </tbody>
</table>

   </div>

    </div>
  </div>

  
  )
}

export default Password
