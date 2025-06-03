import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { shoes } from './products';
import Toast from './Tost';


const Prectice = ({props}) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [theme, setTheme] = useState('light'); 
  const [toast,settoast]=useState(false)      

  

 
 

  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    settoast(`${item.name} added to cart`)
    setTimeout(() => {
    settoast()
   },3000); 
    

  };

  return (
    <>
    {toast && <Toast message={toast}/>}
      <div className="flex justify-between items-center p-4">
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-black rounded m-3 text-white shadow p-4 text-xl font-bold"
          >
          🛒 Cart ({cartItems.length})
        </button>

        <button
          onClick={toggleTheme} 
          className="bg-blue-500 text-white px-4 py-2 rounded shadow font-semibold"
        >
           Theme 
        </button>
      </div>


      {showCart && (
        <div className={`m-4 p-4 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Cart is empty</p>
          ) : (
            <ul className="space-y-2 rem">
              {cartItems.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.price}</p>
                  <button  className={` p-3 rounded shadow-md ${theme === 'dark' ?  'bg-white text-black': 'bg-gray-800 text-white' }`}>remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        {shoes.map((item) => (
          <div key={item.id} className={`rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>Category: <span className="capitalize font-medium">{item.catagery}</span></p>
              <p className="text-lg font-bold text-blue-400 mt-2">{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-3 p-2 border rounded bg-black text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
            
 
};

export default Prectice;













// const prectice =(props) => {
//   return (
//     <>
//      {props.data.map((item)=> 

//       <div className="text-black">{item.price}</div>
     
//      )}
//     </>
   
    
//   )
// }

// export default prectice