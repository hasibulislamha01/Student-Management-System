import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginPage/Login';
import AddStudent from './Pages/AddStudent/AddStudent';
import { Provider } from 'react-redux';
import store from './AppRedux/store'
import StudentsList from './Pages/Students/StudentsList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/addStudent",
        element: <AddStudent />
      },
      {
        path: "/manageStudent",
        element: <StudentsList/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
  </Provider>
)
