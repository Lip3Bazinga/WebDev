import './index.css'

export function Navigation(){

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
  
  return(
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
  )

}