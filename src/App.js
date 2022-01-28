import './App.css';
import Home from './components/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Home/Login/Login/Login';
import Register from './components/Home/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import PrivetRoute from './components/Home/Login/PrivetRoute/PrivetRoute';
import AdminRoute from './components/Home/Login/AdminRoute/AdminRoute';
import Dashboard from './components/Deshboard/Dashboard/Dashboard';
import DashboardHome from './components/Deshboard/DashboardHome/DashboardHome';
import MyOrders from './components/Deshboard/MyOrders/MyOrders';
import UserReview from './components/Deshboard/UserReview/UserReview';
import AddProduct from './components/Deshboard/AddProduct/AddProduct';
import MakeAdmin from './components/Deshboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './components/Deshboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './components/Deshboard/ManageProducts/ManageProducts';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Blogs from './components/Home/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/serviceDetails/:id" element={<ServiceDetails />} />
          <Route path="/dashboard" element={<PrivetRoute> <Dashboard></Dashboard></PrivetRoute>}>
            <Route exact path="/dashboard" element={<DashboardHome />} />
            <Route path={`/dashboard/myOrder`} element={<MyOrders />} />
            <Route path={`/dashboard/addReview`} element={<UserReview />} />
            <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            <Route path="/dashboard/manageAllOrders" element={<AdminRoute><ManageAllOrders /></AdminRoute>} />
            <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
