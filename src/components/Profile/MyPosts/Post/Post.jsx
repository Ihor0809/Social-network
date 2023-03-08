import s from './Post.module.css';


const Post = (props) => {
    return <div className={s.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/1176/1176433.png' />
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post;