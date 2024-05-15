import {useEffect,useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getDoc, updateDoc,doc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'

export const Edit = () => {

  const [nombre,setNombre]= useState('')
  const [categoria,setCategoria]= useState('')
  const [dificultad,setDificultad]= useState('')
  const [tiempo_preparacion,setTiempo_preparacion]= useState('')
  const [ingredientes,setIngredientes]= useState([])
  const [instrucciones,setInstrucciones]= useState([])
  const [imagen,setImagen]= useState('')
  
  const navigate = useNavigate()
  const {recetaId} = useParams()

  const update = async(e) => {
    e.preventDefault();
    const receta = doc(db,"recetas",`${recetaId}`)
    const data = {nombre,categoria,dificultad,tiempo_preparacion,ingredientes,instrucciones,imagen}
    await updateDoc(receta,data)
    navigate('/admin')
  }

  const getRecetabyID = async (id)=>{
    const receta = await getDoc(doc(db,"recetas",id));
    if(receta.exists()){
      //console.log(receta.data());
      setNombre(receta.data().nombre)
      setCategoria(receta.data().categoria)
      setDificultad(receta.data().dificultad)
      setTiempo_preparacion(receta.data().tiempo_preparacion)
      setIngredientes(receta.data().ingredientes)
      setInstrucciones(receta.data().instrucciones)
      setImagen(receta.data().imagen)
      
    }
    else { //aca un swal
      console.log("receta NO existe");
    }
  }

  useEffect ( () => {
    getRecetabyID(recetaId)
  },[recetaId])
  // const recetas=collection(db,"recetas")

  return (
    <div className='container mb'>
      <div className="row">
        <div className="col">
          <h1>edit Receta</h1>

          <form onSubmit={update} >

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input id='nombre' name='nombre' 
                      value={nombre} 
                      onChange={(e)=> setNombre(e.target.value)} 
                      type="text" className='form-control' />
            </div>

            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Categoria</label>
              <select name='categoria' id='categoria' value={categoria}  onChange={(e)=> setCategoria(e.target.value)} className='form-control' >
                <option>Plato Principal</option>
                <option>Entrada</option>
                <option>Postre</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="dificultad" className="form-label">Dificultad</label>
              <select name='dificultad' id='dificultad' value={dificultad}  onChange={(e)=> setDificultad(e.target.value)}  className='form-control' >
                <option >Fácil</option>
                <option >Media</option>
                <option >Difícil</option>
              </select>  
            </div>

            <div className="mb-3">
              <label htmlFor="tiempo_preparacion" className="form-label" >Tiempo de preparacion</label>
              <input name='tiempo_preparacion' value={tiempo_preparacion} onChange={(e)=> setTiempo_preparacion(e.target.value)} type="text" className='form-control' />
            </div>
            
            <div className="mb-3">
              <label htmlFor="ingredientes" className="form-label">Ingredientes</label>
              <input name='ingredientes' value={ingredientes} onChange={(e)=> setIngredientes(e.target.value)} type="text" className='form-control' />
            </div>

            <div className="mb-3">
              <label htmlFor="instrucciones" className="form-label">Instrucciones</label>
              <input name='instrucciones' value={instrucciones} onChange={(e)=> setInstrucciones(e.target.value)} type="text" className='form-control' />
            </div>
            
            <div className="mb-3">
              <label htmlFor="imagen" className="form-label">Url Imagen</label>
              <input name='imagen' value={nombre} onChange={(e)=> setImagen(e.target.value)} type="text" className='form-control' />
            </div>

            <button type='submit' className='btn btn-primary'>Update</button>

          </form>
        </div>
      </div>
    </div>
  )
}