import './App.css'
import AppRoutes from './routes/AppRoutes'
import bgImage from './video/videobg.mp4'

function App() {

  return (
    <>
    <AppRoutes/>
    <video autoPlay loop muted> 
      <source src={bgImage} type="video/mp4"></source>
    </video>
    </>
  )
}

export default App