import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import '../styles/App.css'
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
    return (

        <div>

            <BrowserRouter>

                <Header/>
                <div className='content'>
                    <Routes>
                        <Route path="/" exact element={<StreamList/>}/>
                        <Route path="/streams/new" element={<StreamCreate/>}/>
                        <Route path="/streams/delete" element={<StreamDelete/>}/>
                        <Route path="/streams/edit" element={<StreamEdit/>}/>
                        <Route path="/streams/show" element={<StreamShow/>}/>

                    </Routes>
                </div>

            </BrowserRouter>

        </div>)
}
export default App;
