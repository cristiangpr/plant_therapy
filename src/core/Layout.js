import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Navbar1 from "../components/Navbar"

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
<>


    <div className="row">

<div className="col-sm-12">
  <Navbar1/>
        <div className="jumbotron">

            <h4 id="jumbo-title">{title}</h4>
            <p className="lead">{description}</p>
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
