import AllAlbums from './components/AllAlbums';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='h-screen overflow-hidden bg-black'>
      <div className='flex'>
        <div className='w-2/12 '>
          <SideBar />
        </div>
        <div className='w-10/12 px-12 pt-3'>
          <SearchBar />
          <AllAlbums />
        </div>
      </div>
    </div>
  );
}

export default App;
