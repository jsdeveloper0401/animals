import React, { useState } from "react";
import { nanoid } from "nanoid";
import Card from "./components/card/Card";

const App = () => {
    const [animals, setAnimals] = useState([
        {
            id: nanoid(),
            name: "Lion",
            color: "Black",
            weight: "200 kg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: nanoid(),
            name: "Tiger",
            color: "Yellow",
            weight: "250 kg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: nanoid(),
            name: "Leopard",
            color: "BlackJack",
            weight: "300 kg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ]);

    const [form, setForm] = useState({
        name: "",
        color: "",
        weight: "",
        desc: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            form.name.trim() === "" ||
            form.color.trim() === "" ||
            form.weight.trim() === "" ||
            form.desc.trim() === ""
        ) {
            alert("Iltimos, barcha maydonlarni to'ldiring.");
            return;
        }

        const newAnimal = { ...form, id: nanoid() };
        setAnimals([...animals, newAnimal]);
        setForm({ name: "", color: "", weight: "", desc: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const deleteAnimal = (id) => {
        const newAnimals = animals.filter((animal) => animal.id !== id);
        setAnimals(newAnimals);
    };

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-8 offset-md-2">
                    <form id="submit" onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            value={form.name}
                            type="text"
                            name="name"
                            placeholder="Hayvon nomi"
                            className="form-control"
                        />
                        <input
                            onChange={handleChange}
                            value={form.color}
                            type="text"
                            name="color"
                            placeholder="Rangi"
                            className="form-control mt-3"
                        />
                        <input
                            onChange={handleChange}
                            value={form.weight}
                            type="text"
                            name="weight"
                            placeholder="Og'irligi"
                            className="form-control mt-3"
                        />
                        <textarea
                            onChange={handleChange}
                            value={form.desc}
                            name="desc"
                            placeholder="Tavsifi..."
                            cols="30"
                            rows="10"
                            className="form-control mt-3"></textarea>
                        <button type="submit" className="btn btn-success my-3">
                            Yangi hayvon qo'shish
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                {animals.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <Card animal={item} deleteAnimal={deleteAnimal} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
