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
<Navbar1/>

    <div className="row">

<div className="col-md-12">
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
        </div>
    </div>
</>
);

export default Layout;
