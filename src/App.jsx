import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Errors from './RoutesFol/Errors';
import Formhook from './FormHookFol/Formhook';
import OtherSomething from './FormHookFol/OtherSomething';
import { Counter } from './ReduxFol/Counter';



// import Home from "./RoutesFol/Home";
const Home = React.lazy(() => import("./RoutesFol/Home"))

// import Cart from "./RoutesFol/Cart";
const Cart = React.lazy(() => import("./RoutesFol/Cart"))

// import Details from "./RoutesFol/details";
const Details = React.lazy(() => import("./RoutesFol/details"))


// import Todo from "./TodoList/Todo";
// import { Divide } from 'lucide-react';
// import Prectice from './components/prectice';
// import Api from './components/Api';
// import Api1 from './components/Api1';
// import First from './TodoList/First';
// import Second from './TodoList/Second';
// import Searchperams from './RoutesFol/Searchperams';
// import WeatherApp from './components/WeatherApp';
// import { NameContextFun } from './RoutesFol/NameContext';
// import MultipleForm from './TasksFol/MultipleForm';
// import FeedbackReducer from './TasksFol/FeedbackReducer';
// import ReducerForm from './TasksFol/ReducerForm';
// import NewTodo from './TodoList/NewTodo';
// import AnimatedTabExample from './AuraFramework.jsx/AnimatedTabExample';



const App = () => {


  return (
    <>


      {/* <Suspense fallback={<div className='text-6xl'>Loading ...................</div>}> */}
      {/* <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="cart" element={<Suspense fallback={<div className='text-2xl'>Loading .....</div>}><Cart /></Suspense>} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="*" element={<Errors />} />
        </Routes>

      </Suspense> */}

      {/* <BrowserRouter>
 <Routes>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/Home" element={<Prectice/>}/>
  <Route path="*" element = {<Errors/>}/>
 </Routes>
 </BrowserRouter> */}




      <Routes>
        <Route path="/" element={<Formhook />} />
        <Route path="/OtherSomething" element={<OtherSomething/>} />
        <Route path='redux' element={<Counter/>}/>
      </Routes>

      {/* <Todo/> */}

      {/* <LoginForm/> */}
      {/* <Prectice/> */}
      {/* <Searchperams/> */}

      {/* <Api/> */}
      {/* <Api1/> */}
      {/* <First/>
      <Second/> */}

      {/* <Home/> */}

      {/* <WeatherApp/> */}

      {/* <MultipleForm/> */}
      {/* <FeedbackReducer/> */}
      {/* <ReducerForm/> */}
      {/* <NewTodo/> */}

      {/* <AnimatedTabExample/> */}
      {/* <Formhook/> */}








    </>
  )
}
export default App











