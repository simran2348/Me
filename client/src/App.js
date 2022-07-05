import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'
import FabRouter from './Components/FabRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const { isDark } = useContext(ThemeContext)

  return (
    <Provider store={store}>
      <div data-theme={!isDark && 'dark'} className='app themeBackground'>
        <Router>
          <FabRouter />
          <AppRoutes />
        </Router>
      </div>
    </Provider>
  )
}

export default App
