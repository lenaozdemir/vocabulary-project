import React, { useState } from "react";

const Translation = ({translation}) =>{

    const [hovered, setTranslation] = useState(false);

    return (
    <p 
    onMouseEnter={() => setTranslation(true)}
    onMouseLeave={() => setTranslation(false)}
    >
        {hovered ? translation : 'Show Tranclation'}
    </p>
    );
};

export default Translation;