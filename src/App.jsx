import Loader from './components/Loader'
import { useState } from 'react'
import Topbar from './components/Topbar'
import Leftbar from './components/Leftbar'
import Newsfeed from './components/Newsfeed'
import EditMessage from './components/EditMessage'
import RightBar from './components/Rightbar'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderFinished = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader onLoaderFinished={handleLoaderFinished} />
      ) : (
        <>
          <Topbar/>
          <Leftbar/>
          <Newsfeed/>
          <EditMessage/>
          <RightBar/>
        </>
      )}
    </>
  )
}

export default App
