import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/", element:<Home/>}, 
      {
        path:"/post-job", element:<CreateJob/>
      } ,
      {
        path:"/my-job", element:<MyJobs/>
      } ,
      {
        path:"/salary", element:<SalaryPage/>
      },
      {
        path:"edit-job/:id",
        element:<UpdateJob/>,
        loader: ({params})=> fetch(`http://localhost:5173/all-jobs/${params.id}`)

      } 
      
  ]
  },

  {
    path: "/login",
    element: <Login/>
  }
]);

export default router;