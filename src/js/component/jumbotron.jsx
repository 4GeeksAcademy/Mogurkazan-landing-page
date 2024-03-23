import React from "react";
 const Jumbotron = () => {
    return (
        <div className="jumbo position-relative p-5 text-start text-muted bg-emphasis border border-dashed">
            <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle"></use></svg>
            <h1 className="text-body-emphasis">A Warm Welcome!</h1>
            <p className="col-lg-6 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus veritatis nobis magni. Tempore porro quia eligendi rerum modi pariatur aliquid?
            </p>
            <button className="btn btn-primary px-5 mb-5" type="button">
            Call to action
            </button>
        </div>
    )
 }
 export default Jumbotron;