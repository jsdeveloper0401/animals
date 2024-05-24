import React from "react";

const Card = ({ animal, deleteAnimal }) => {
    return (
        <div className="card m-3 shadow-sm mb-5" style={{ width: "18rem" }}>
            <div className="card-header bg-primary text-white">
                <h1 className="h4">{animal.name}</h1>
            </div>
            <div className="card-body">
                <h5 className="card-title">Color: {animal.color}</h5>
                <h5 className="card-title">weight: {animal.weight}</h5>
                <p className="card-text">Description: {animal.desc}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-warning">More info</button>
                <button
                    className="btn btn-danger ml-2"
                    onClick={() => deleteAnimal(animal.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
