import { useState} from "react";

import Header from "./Header";
import Search from "./Search";
import Coversation from "./Conversation";

const Menu = ()=>
{
    const [text,setText] = useState('');

    return(
        <>
        <Header/>
        <Search setText={setText}/>
        <Coversation text={text}/>
        </>
    )
}

export default Menu;