import './App.css';
import Home from './components/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Home/Login/Login/Login';
import Register from './components/Home/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/addCart/:_id" element={<PrivetRoute><Cart /></PrivetRoute>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<PrivetRoute> <Dashboard></Dashboard></PrivetRoute>}>
            <Route exact path="/dashboard" element={<DashboardHome />} />
            <Route path={`/dashboard/myOrder`} element={<MyOrders />} />
            <Route path={`/dashboard/addReview`} element={<UserReview />} />
            <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            <Route path="/dashboard/manageAllOrders" element={<AdminRoute><ManageAllOrders /></AdminRoute>} />
            <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>} />
            <Route path={`/dashboard/payment/:paymentId`} element={<Payment />} />
            <Route path={`/dashboard/pay`} element={<Pay />} />
          </Route> */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
