import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                    <p className='header-text fs-18 fw-3'>Between The Pages Of A Book Is A Lovely Place to Be</p>
                    <p className='header-text fs-18 fw-3'>What on Earth could be mote luxurious than a SODA, a BOOK and a CUP of COFFEE </p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header


