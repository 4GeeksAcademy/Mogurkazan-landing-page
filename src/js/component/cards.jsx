import React from "react";
const Minicard = () => {
    return (
        <div className="miniatura card">
            <img src="https://cdn.pixabay.com/photo/2020/05/19/13/48/cartoon-5190942_640.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    
    )
}
export default Minicard;