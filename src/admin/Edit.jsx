import {useEffect,useState} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {getDoc, updateDoc,doc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'
import { getDownloadURL, uploadBytes } from 'firebase/storage'

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

  const limpiarStorage = () => {
      localStorage.clear()
      window.location.assign('/')
    }

  const update = async(e) => {
    e.preventDefault();
    const receta = doc(db,"recetas",`${recetaId}`)
    const data = {nombre,categoria,dificultad,tiempo_preparacion,ingredientes,instrucciones,imagen}
    await updateDoc(receta,data)
    navigate('/admin')
  }

  const getRecetabyID = async (recetaId)=>{
    const receta = await getDoc(doc(db,"recetas",recetaId));
    if(receta.exists()){
      //console.log(receta.data());
      setNombre(receta.data().nombre)
      setCategoria(receta.data().categoria)
      setDificultad(receta.data().dificultad)
      setTiempo_preparacion(receta.data().tiempo_preparacion)
      setIngredientes(receta.data().ingredientes)
      setInstrucciones(receta.data().instrucciones)
      setImagen((receta.data().imagen))
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
      <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type='button' onClick={limpiarStorage}>LOGOUT</button>
      </div>
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
              {ingredientes.map((ingrediente,index)=> (
               <input key={index}value={ingrediente} 
                onChange={(e)=> {
                  const nuevosIngredientes =[...ingredientes];
                  nuevosIngredientes[index] = e.target.value;
                  setIngredientes(nuevosIngredientes)
                  }} type="text" className='form-control'/>
              ))}
            </div>

            <div className="mb-3">
              <label htmlFor="instrucciones" className="form-label">Instrucciones</label>
              {instrucciones.map((instruccion,index)=>(
                   <input key={index} value={instruccion} 
                    onChange={(e)=> {
                      const nuevasIntruciones=[...instrucciones];
                      nuevasIntruciones[index]=e.target.value;
                      setInstrucciones(nuevasIntruciones)}} type="text" className='form-control'/> 
              ))}
            </div>
            
            <div className="mb-3">
              <label htmlFor="imagen" className="form-label">Url Imagen</label>
              <input name='imagen' value={imagen} onChange={(e)=> setImagen(e.target.value)} type="text" className='form-control' />
            </div>

            <button type='submit' className='btn btn-primary'>Update</button>
            <Link to='/admin'>
              <button className='btn btn-danger'>
                Cancelar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}