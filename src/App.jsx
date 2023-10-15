import './App.css'
import Home from './Routes/Home'
import Signin from './Routes/Signin'
import Signup from './Routes/Signup'
import Dashboard from './Routes/Dashboard'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Routes/Protected'

function App() {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/dashboard",
    element:<Protected><Dashboard/></Protected>
  },
  {
    path:"/signin",
    element:<Signin></Signin>
  },
  {
    path:"/signup",
    element:<Signup></Signup>
  }
])

return (
  <div>
  {/* Place the ToastContainer at the root of your application */}
  <ToastContainer />

  {/* Wrap your router provider around the components */}
  <AuthContext>
    <RouterProvider router={router}></RouterProvider>
    </AuthContext>
</div>
)


}

export default App
