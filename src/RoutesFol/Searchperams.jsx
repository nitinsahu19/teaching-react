import React from "react";
import { useSearchParams } from "react-router-dom";

// function Searchperams() {
//     const [searchParams, setSearchParams] = useSearchParams();

//     const color = searchParams.get("color");
//     const number = searchParams.get("number");

//     const handleChangeColor = () => {
//         setSearchParams({ color: "blue",number:"first" });
//     };
//     const handleChangeColor2 = () => {
//         setSearchParams({ color: "red",number:"second" });
//     };
//     const handleChangeColor3 = () => {
//         setSearchParams({ color: "yellow" ,number:"third"});
//     };
//     const handleChangeColor4 = () => {
//         setSearchParams({ color: "black",number:"fourth" });
//     };

//     return (
//         <div >
//             <h1>Selected color: {color ? color : "No any"} </h1>
//             <button className=" border bg-blue-700 p-2 m-2" onClick={handleChangeColor}>
//                 Select Blue
//             </button>
//             <button className="border bg-red-600 p-2 m-2" onClick={handleChangeColor2}>
//                 Select red
//             </button>
//             <button className="border bg-yellow-400 p-2 m-2" onClick={handleChangeColor3}>
//                 Select yellow
//             </button>
//             <button className="border text-amber-50 bg-black p-2 m-2" onClick={handleChangeColor4}>
//                 Select black
//             </button>
//         </div>
//     )
// }

// export default Searchperams;







function Searchperams() {

    const [change,Setchange]=useSearchParams()
    const color=change.get("color name")
   const first=()=>{
    Setchange({color:"Blue"})
   }

    
    
    
  return (
    <>
    <div>
        <h1>The selected color is:-{color ?color :"No any selected"}</h1>

        <button onClick={first}>select blue</button>
    </div>
    
    </>
  )
}

export default Searchperams