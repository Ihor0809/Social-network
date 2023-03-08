import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    
    return <div>
        <div className={s.image}>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
        </div>
        <div className={s.avatar}>
            <img src={props.profile.photos.large}></img>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>;
}

export default ProfileInfo;