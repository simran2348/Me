import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'
import FabRouter from './Components/FabRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import store from './store'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <Provider store={store}>
      <div data-theme={isDark && 'dark'} className='app themeBackground'>
        <Router>
          <FabRouter isDark={isDark} toggleTheme={toggleTheme} />
          <AppRoutes />
        </Router>
        <ToastContainer
          position='top-left'
          autoClose={1000}
          hideProgressBar={true}
          closeOnClick
          draggable
          className={'appToastContainer'}
          toastClassName={'appToast'}
          bodyClassName={'appToastBody'}
          closeButton={false}
        />
      </div>
    </Provider>
  )
}

export default App
