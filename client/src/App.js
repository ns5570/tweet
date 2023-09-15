// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css';
// import Home from './components/Home';
// import Register from './components/Auth/Register';
// import Login from './components/Auth/Login';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>

//           <Route exact path="/" component={<Home />} />
//           <Route exact path="/login" component={<Login />} />
//           <Route exact path="/register" component={< Register />} />
//           </Routes>
//         </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import jwt_decode from 'jwt-decode'

// import store from './store'

// import Main from './components/Layout/Main'

// import Home from './components/Home'
// import Register from './components/Auth/Register'
// import Login from './components/Auth/Login'
// import Profile from './components/Profile/Profile'
// import NotFound from './components/NotFound'
// import Search from './components/Search/NotFound'

// import setAuthHeader from './utils/setAuthHeader'
// import { logoutUser, getCurrentUser } from './actions/authActions'

// if (localStorage.getItem('jwtToken')) {
//   const currentTime = Date.now() / 1000
//   const decode = jwt_decode(localStorage.getItem('jwtToken'))

//   if (currentTime > decode.exp) {
//     store.dispatch(logoutUser())
//     window.location.href = '/'
//   } else {
//     setAuthHeader(localStorage.getItem('jwtToken'))
//     store.dispatch(getCurrentUser())
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div>
//           <BrowserRouter>
//             <Main>
//               <Routes>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/register" component={Register} />
//                 <Route path="/profile/:userId" component={Profile} />
//                 <Route path="/search" component={Search} />
//                 <Route component={NotFound}/>
//               </Routes>
//             </Main>
//           </BrowserRouter>
//         </div>
//       </Provider>
//     );
//   }
// }

// export default App;