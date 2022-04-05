import React, { useState } from "react";

export default function ContadorClicks() {

    const [click, setClick] = useState(0);
    return (
        <>
            <button onClick={() => { setClick(click + 1) }}> {click} asd</button>
        </>
    )
}