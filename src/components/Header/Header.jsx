import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.edigitalagency.com.au/wp-content/uploads/new-small-Instagram-logo-full-colour-png-184x184-pixels.png'></img>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;