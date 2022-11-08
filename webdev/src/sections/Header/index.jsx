import './index.css'
import logo from './images/logo.png'
import React, {useState} from 'react';

export function Header(){
  
  /* ===== Header Animation ===== */
    window.addEventListener("scroll", () => {
      const header = document.querySelector('header');
      header.classList.toggle('scroll', scrollY > 0);
    });
  /* ===== Navigation Animation ===== */
    const list = document.querySelectorAll('.list');
    function activeLink(){
      list.forEach( (item) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
    }
    list.forEach( (item) => {
      item.addEventListener("mouseover", activeLink);
    });
  /* ===== Menu Script ===== */

    if(window.innerWidth < 1018){

    } 

  return(
    <header>
      <a href='#' className='logo'>
        <img src={logo} />
      </a>
      <div className='navigation'>
        <ul>
          <li className='list active'>
            <a href='#about'>
              <span className='icon'>
                <ion-icon name="film-outline"></ion-icon>
              </span>
              <span className='textLink'>About</span>
            </a>
          </li>
          <li className='list'>
            <a href='#more'>
              <span className='icon'>
                <ion-icon name="add-circle-outline"></ion-icon>
              </span>
              <span className='textLink'>More</span>
            </a>
          </li>
          <li className='list'>
            <a href='#differential'>
              <span className='icon'>
                <ion-icon name="ribbon-outline"></ion-icon>
              </span>
              <span className='textLink'>Diferencial</span>
            </a>
          </li>
          <li className='list'>
            <a href="#portfolio">
              <span className='icon'>
                <ion-icon name="albums-outline"></ion-icon>
              </span>
              <span className='textLink'>Portfolio</span>
            </a>
          </li>
          <li className='list'>
            <a href="#contact">
              <span className='icon'>
                <ion-icon name="log-in-outline"></ion-icon>
              </span>
              <span className='textLink'>Contact</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
      <div className='links'>
        <ul>
          <li>
            <a href="#" className='facebookIcon'>
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className='instagramIcon'>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/send?phone=5516996983516" className='whatsappIcon'>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
      <div className="openIcon menu"><ion-icon name="reorder-two-outline"></ion-icon></div>
      <div className="closeIcon menu"><ion-icon name="close-outline"></ion-icon></div>      
    </header>
  )
}