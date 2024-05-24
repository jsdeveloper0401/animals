import React from "react";

const Header = ({title,animals}) => {
    // const { title } = props;
    // console.log(title);
    return (
        <header>
            {/* <h1>{title}</h1> */}
            <h1>{animals.name}</h1>
            <p>{animals.color}</p>
            <p>{animals.weight}</p>
        </header>
    );
};

export default Header;
