
import { Provider } from 'react-redux'
import './App.css'
import StolenBikes from './stolen-bikes/StolenBikes'
import { store } from './services/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <main className='lg:px-48 px-6 py-4'>
          <StolenBikes />
        </main>
      </Provider>
    </>
  )
}

export default App
