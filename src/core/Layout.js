import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Navbar1 from "../components/Navbar"

const Layout = ({
    title = "Title",
  
    className,
    children
}) => (
<>


    <div className="row">

<div className="col-sm-12">
  <Navbar1/>
        <div className="jumbotron">

            <h4 id="jumbo-title">{title}</h4>

        </div>
        </div>
        </div>
        <div className="row">

    <div className="col-sm-12">
        <div className={className}>{children}</div>
        </div>
    </div>
</>
);

export default Layout;
