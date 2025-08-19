import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import UserContext from "./utils/UserContext";
// import About from "./components/About";

const About = lazy(() => import("./components/About"));


const Main = () => {
  const [userName, setUserName] = useState("DefaultUser");

  useEffect(() => {
    const data = {
      name: "Shashank"
    }

    setUserName(data.name);
  }, [])

  const onlineStatus = useOnlineStatus();

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>

      <div className="mainContainer">
        <Header onlineStatus={onlineStatus} />
        {!onlineStatus ? <h1 style={{ margin: "40px" }}>Looks like you are offline</h1> : <Outlet />}
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

// root.render(<Main />);
