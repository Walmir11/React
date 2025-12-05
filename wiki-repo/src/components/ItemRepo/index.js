import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo() {
    return(
        <ItemContainer>
            <h3>Item Title</h3>
            <p>Item description goes here.</p>
            <a href="#" >Ver repositório</a><br />
            <a href="#" className="remover">Remove</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;