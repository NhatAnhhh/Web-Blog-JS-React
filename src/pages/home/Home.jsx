import Header from '../../components/header/Header'
import Post from '../../components/post/Post'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
        <Post/>
        <Posts/>
        <Sidebar/>
        
    </div>
    </>
  )
}
