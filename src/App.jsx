import './App.css';
import Blogs from './Component/blogs/blogs';
import Bookmark from './Component/Bookmarks/Bookmark';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
