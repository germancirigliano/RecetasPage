
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Show} from './components/Show'


export const App =()=>{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show/>}/>
          <Route path="/create" element="crear"/>
          <Route path="/edit/:id" element="editar"/>
          <Route path="/detail/:id" element="detail"/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}