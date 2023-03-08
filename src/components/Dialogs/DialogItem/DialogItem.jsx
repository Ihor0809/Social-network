import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (<div className={s.dialogLeftSide}>
        <div className={s.dialogAvatar}>
            <img src="https://cdn-icons-png.flaticon.com/512/1176/1176433.png" alt="avatar" />
        </div>
        <div className={s.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? s.activeLink : s.dialog}>{props.name}</NavLink>
        </div>
    </div>
    )
}

export default DialogItem;