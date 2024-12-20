import brandLogo from '../../assets/svg/logo.svg';
import burgerBtn from '../../assets/svg/burger-menu.svg'
import styles from './Header.module.css';

const menuItems = [
  { href: '#', label: 'Music' },
  { href: '#', label: 'Photography' },
  { href: '#', label: 'Picture' },
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
              <img src={burgerBtn} className='burger-icon'/>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { menuItems };