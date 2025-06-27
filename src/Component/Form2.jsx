 import React, { useState } from "react";
 
 function Forms() {
   const [page, setPage] = useState(1);
   const [form, setName] = useState({
name:'',
Email:'',
City:'', 
pincode:''
   })
 
   return (
     <>
       {page == 1 && (
         <div className="w-100 mt-20 p-4  ms-20 bg-lime-100">
           <div className="p-1">
             <label className="text-2xl">Name</label>
             <br />
             <input value={form.name}
               onChange={(e) => setName({...form,name:e.target.value})}
               className="border px-3 p-2 rounded"
               type="text"
               placeholder="Enter your name"
             />
           </div>
           <div className="p-1">
             <label className="text-2xl">Email</label>
             <br />
             <input value={form.Email}
               onChange={(e) => setName({...form,Email:e.target.value})}
               className="border px-3 p-2 rounded"
               type="text"
               placeholder="Enter your Email"
             />
           </div>
           <div className="flex justify-end ">
             <button
               className="bg-green-300 p-2 px-4 rounded-xl"
               onClick={() => setPage(page + 1)}>Next</button>
           </div>
         </div>
       )}{page == 2 && (
         <div className="w-100 mt-20 p-4  ms-20 bg-lime-100">
           <div className="p-1">
             <label className="text-2xl">City</label>
             <br />
             <input value={form.City}
               onChange={(e) => setName({...form,City:e.target.value})}
               className="border px-3 p-2 rounded"
               type="text"
               placeholder="Enter your city"
             />
           </div>
           <div className="p-1">
             <label className="text-2xl">Pincode</label>
             <br />
             <input value={form.pincode}
               onChange={(e) => setName({...form, pincode:e.target.value})}
               className="border px-3 p-2 rounded"
               type="text"
               placeholder="Enter your Pincode"
             />
           </div>
           <div className="flex justify-between">
             <button
               className="bg-amber-400 p-2 px-4 rounded-xl"
               onClick={() => setPage(page - 1)}
             >
               Pre
             </button>
             <button
               className="bg-green-300 p-2 px-4 rounded-xl"
               onClick={() => setPage(page + 1)}
             >
               {" "}
               Next
             </button>
           </div>
         </div>
       )}{page == 3 && (
         <div className="w-100 mt-20 p-4  ms-20 bg-lime-100">
           <div className="p-1">
             <label className="text-2xl">Name:{form.name}</label>
             <br />
           </div>
           <div className="p-1">
             <label className="text-2xl">Email:{form.Email}</label>
             <br />
           </div>
           <div className="p-1">
             <label className="text-2xl">City:{form.City}</label>
             <br />
           </div>
           <div className="p-1">
             <label className="text-2xl">Pincode:{form.pincode}</label>
             <br />
           </div>
           <div className=" flex justify-end">
             <button className="bg-green-300 p-2 px-4 rounded-xl">Submit</button>
           </div>
         </div>
       )}
     </>
   );
 }
 
 export default Forms;
 