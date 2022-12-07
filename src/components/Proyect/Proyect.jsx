import React from 'react';
import './Proyect.css'
import Venicrea from '../../assets/venicrea.png'
import Desarroladora from '../../assets/desarrolladora.png'




const Proyect = () => {

    return(
       <> 
       
       <div className='contenedor-proyectos'> 
       <hr />
       <h1 className='titulo-proyectos' id='proyectos'>Proyectos realizados</h1> 
    <div className="contenedor-card">
  <div className="card">
    <figure>
      <img src={Venicrea} alt />
    </figure>
    <div className="contenido">
      <h3>Landing Page</h3>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste labore nostrum repellat ipsa consequuntur magni accusamus excepturi esse molestiae numquam, eaque illo autem, natus laborum nemo repellendus tempore dignissimos!
      </p>
      
    </div>
  </div>
  <div className="card">
    <figure>
      <img src={Desarroladora} alt />
    </figure>
    <div className="contenido">
      <h3>Portfolio</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, amet consequuntur? Vitae, tenetur
        voluptatum tempora facilis
        sequi cum unde beatae optio est autem, consectetur, omnis voluptates eligendi necessitatibus saepe cumque.</p>
      
    </div>
  </div>
  <div className="card">
    <figure>
      <img src={Desarroladora} alt />
    </figure>
    <div className="contenido">
      <h3>Portfolio con React-Js</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, amet consequuntur? Vitae, tenetur
        voluptatum tempora facilis
        sequi cum unde beatae optio est autem, consectetur, omnis voluptates eligendi necessitatibus saepe cumque.</p>
     
    </div>
  </div>
</div>

 <div className="boton">
 <button className='boton-proyectos'><a href="#" className='link-proyectos'>Conocer los proyectos</a></button>
 </div>
 </div>
 
 
       </>
    )
}

export default Proyect