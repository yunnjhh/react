import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Detail } from "./pages/Detail";
import { Home, About, Detail, Count, InputText } from "./pages"
import Guide from "./components/Books/Guide";
 
const LectureApp = () => {
    return (
        <div> 
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='about' element={ <About /> }/>
                <Route path='detail' element={ <Detail /> } />
                <Route path='count' element={ <Count /> } />
                <Route path='inputText' element={ <InputText /> } />
                <Route path='guide' element={ <Guide /> } />
            </Routes>
        </div>
        
    )
}

export default LectureApp;

