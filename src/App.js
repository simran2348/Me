import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'
import FabRouter from './Components/FabRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  const { isDark } = useContext(ThemeContext)

  return (
    <div data-theme={!isDark && 'dark'} className='app themeBackground'>
      <Router>
        <FabRouter />
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
