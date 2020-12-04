import './App.css';
import { Background } from './components/Background'
import { ReactQueryConfigProvider, QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryConfig = {
  refetchAllOnWindowFocus: true,
  retry: 0,
  staleTime: 1000
}
const queryCache = new QueryCache();
// queryCache.config = queryConfig
console.log(queryCache)
function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="App">
        <Background />
      </div>
    </ReactQueryCacheProvider> 
  );
}

export default App;
