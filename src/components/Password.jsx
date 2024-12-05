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
    <div className="flex justify-center items-center max-h-[screen] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="bg-white max-w-4xl w-full h-full shadow-2xl rounded-3xl p-10 flex flex-col">
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
          className="w-full bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
        >
          Add Password
        </button>
      </div>
    </div>
    
    {/* Table Section */}
    <div className="flex-1 overflow-auto">
      <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-indigo-600 text-white">
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
                className={`transition-all duration-300 hover:bg-indigo-50 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
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
</div>

  
  )
}

export default Password
