import brandLogo from '../../assets/svg/logo.svg';
import styles from './Header.module.css';


const menuItems = [
  { href: '#', label: 'Link1' },
  { href: '#', label: 'Link2' },
  { href: '#', label: 'Link3' },
];

export default  function Header({handleShowSidebar}) {

  return (
    <header>
      <div className={styles.container__header}>
        <div className={styles.header__inner}>
          <a href="#" className="logo">
            <img
              src={brandLogo}
              alt="Brand logo"
              className={styles.logo__img}
            />
          </a>
          
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.menuListItem}>
                  <a href={item.href} className={styles.menuListLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button  onClick={handleShowSidebar} className={styles.burgerMenu} aria-label="Open menu">
              <svg 
                className='burger-icon'
                width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="" stroke-width="2" stroke-linecap="round"/>
              <path d="M4 12L20 12" stroke="" stroke-width="2" stroke-linecap="round"/>
              <path d="M4 6L20 6" stroke="" stroke-width="2" stroke-linecap="round"/>
            </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { menuItems };