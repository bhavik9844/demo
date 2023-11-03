import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/Login/SignIn";
import UserList from "./Views/UserList/UserList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./PrivateRouter";
import ErrorBoundary from "./ErrorBoundary";
import Category from "./Views/Category/Category";
import ContactUs from "./Views/ContactUs/ContactUs";
import Test from './Views/Test/Test';
import Booking from './Views/Booking/Booking';
import PendingPayment from './Views/Payment/PendingPayment';
function App() {
  return (
    <>
      <ErrorBoundary>
        <ToastContainer autoClose={2000} />
        <BrowserRouter basename="/runrz/admin">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/test" element={<Test />} />
            <Route element={<PrivateRouter />}>
              <Route path="/userlist" element={<UserList />} />
              <Route path="/category" element={<Category />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/payment" element={<PendingPayment />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
