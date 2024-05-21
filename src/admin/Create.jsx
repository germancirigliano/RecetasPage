import { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {getDownloadURL,ref as storageRef, uploadBytes} from 'firebase/storage'
import {collection, addDoc} from 'firebase/firestore'
import {db,storage} from '../firebaseConfig/firebase'


export const Create = ()=>{
 const [nombre,setNombre] = useState('')
 const [categoria, setCategoria] = useState('Plato principal')
 const [dificultad, setDificultad] = useState('Fácil')
 const [preparacion, setTiempo_preparacion] = useState('')
const [ingredientes,setIngredientes] = useState([''])
const [instrucciones,setInstrucciones] = useState([''])
 const [imagen, setImagen] = useState(null)
 
 const navigate = useNavigate();

  const limpiarStorage = () => {
      localStorage.clear()
      window.location.assign('/')
    }

 const handleChangeIng = (index,value) =>{
  const nuevosIngredientes = [...ingredientes];
  nuevosIngredientes[index] = value;
  setIngredientes(nuevosIngredientes);
 }
 const handleChangeIns = (index,value) =>{
  const nuevasInstrucciones = [...instrucciones];
  nuevasInstrucciones[index] = value;
  setInstrucciones(nuevasInstrucciones);
 }

  //Agregar input para ingredientes
  const handleAddInputIng = () => {
    setIngredientes([...ingredientes,'']);
  }
  //Agregar input para instrucciones
  const handleAddInputIns = () => {
    setInstrucciones([...instrucciones,'']);
  }
  
  //Remover input de ingredientes
  const removerIngrediente = (index) => {
    if(ingredientes.length===1) return;
      const newIngredientes = [...ingredientes];
      newIngredientes.splice(index,1);
      setIngredientes(newIngredientes);
   }
  //Remover input de instrucciones
  const removerInstruccion = (index) => {
    if(instrucciones.length===1) return;
      const newInstrucciones = [...instrucciones];
      newInstrucciones.splice(index,1);
      setInstrucciones(newInstrucciones);
  }
  
const store = async(e) => {
    e.preventDefault();          
    try {
          const imagenRef = storageRef(storage, `images/${imagen.name}`);
             await uploadBytes(imagenRef, imagen);
             console.log('Imagen subida correctamente');
             //Se obtiene la url de la imagen desp de subirla
              getDownloadURL(imagenRef).then((url)=>{
                console.log('URL de la imagen:',url);
                setImagen(url)
              //Se guarda la imagen en la base de datos
                addDoc(collection(db,"recetas"),{
                  nombre : nombre,
                  categoria: categoria,
                  dificultad: dificultad,
                  tiempo_preparacion: preparacion,
                  ingredientes: ingredientes,
                  instrucciones: instrucciones,
                  imagen:url})
              }).then(()=>{
                console.log('Datos guardados en Firestore');
                navigate("/admin")
              }).catch((error)=>{
                  console.error('Error al guardar los datos en firestore',error);
              });
        } catch (error) {
            console.error('Error al subir la imagen.',error)
        }  
}


  return (
    <>
      <div className="container mb">
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type='button' onClick={limpiarStorage}>LOGOUT</button>
        </div>
        <div className='row'>
          <div className='col'>
            <h1>Nueva Receta</h1>
            <form onSubmit={store}>
             <div className='mb-3'>
              <label htmlFor="nombre" className='form-label'>Nombre</label>
                <input id='nombre' type="text" name='nombre' className='form-control' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
             </div>
             <div className='mb-3'>
              <label htmlFor="categoria" className='form-label'>Categoría</label>
              <select name="categoria" id="categoria" className='form-control' onChange={(e)=>setCategoria(e.target.value)} value={categoria}>
                <option value='Plato principal'>Plato principal</option>
                <option value='Entrada'>Entrada</option>
                <option value='Postre'>Postre</option>
              </select>
             </div>
             <div className='mb-3'>
              <label htmlFor='' className='form-label' >Dificultad:</label>
              <select name="dificultad" id="dificultad" className='form-control' onChange={(e)=>setDificultad(e.target.value)} value={dificultad}>
                <option value='Fácil' >Fácil</option>
                <option value='Media'>Media</option>
                <option value='Difícil'>Difícil</option>
              </select>
             </div> 
            <div className='mb-3'>
              <label htmlFor='tiempo_preparacion' className='form-label'>
                Tiempo de preparación:
                <input type="text" name='tiempo_preparacion' className='form-control'  onChange={(e)=>setTiempo_preparacion(e.target.value)}/>
              </label>
            </div>
            <div className='mb-3'>
              <label htmlFor='ingredientes' className='form-label'>
                Ingredientes
                {ingredientes.map((ingrediente,index)=>(
              <div key={index}>
                <input type="text" value={ingrediente} onChange={(e)=>handleChangeIng(index,e.target.value)} placeholder={`Ingrediente ${index + 1}`}/>
                <button type='button' onClick={()=>removerIngrediente(index)}>Eliminar</button>
              </div>
                ))}
                <button className='btn btn-secondary' type='button' onClick={handleAddInputIng}>Agregar ingrediente</button>
              </label>
            </div>
            <div className='mb-3'>
              <label htmlFor='instrucciones' className='form-label'>
                Instrucciones
                {instrucciones.map((instruccion,index)=>(
              <div key={index}>
                <input type="text" value={instruccion} onChange={(e)=>handleChangeIns(index,e.target.value)} placeholder={`Instruccion ${index + 1}`}/>
                <button type='button' onClick={()=>removerInstruccion(index)}>Eliminar</button>
              </div>
                ))}
                <button type='button' className='btn btn-secondary' onClick={handleAddInputIns}>Agregar Instrucción</button>
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="file" className="form-label">Url Imagen</label>
              <input name='imagen' id='file'  onChange={(e)=>setImagen(e.target.files[0])} type="file" className='form-control' />
            </div>
            <button className='btn btn-primary' type='submit'>AÑADIR RECETA</button>
            <Link to="../admin" >
            <button className="btn btn-secondary mt-2 mb-2 bg-danger m-2">CANCELAR</button>
            </Link>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}