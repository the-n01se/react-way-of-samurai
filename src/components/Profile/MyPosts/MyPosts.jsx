import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
      return (
            <div className={s.postsBlock}>
                  My posts
                  <div>
                        <div>
                              <textarea></textarea>
                        </div>
                        <div>
                              <button>Add post</button>
                        </div>
                  </div>
                  <div className={s.posts}>
                        <Post message="Hi, how are you?" likeCounter="15" />
                        <Post message="It's my first post" likeCounter="27" />
                  </div>
            </div>
      );
};

export default MyPosts;