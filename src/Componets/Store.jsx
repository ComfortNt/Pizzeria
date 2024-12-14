
import '../Styles/Store.css'
import List from '../Componets/Items';

function Store(){
      

    return(
        
        <div className="store"> 

           

              <div className="store-grid">
                        {
                        List.map( (item , index) =>{  return(
                            
                    <div className="store-card" key={index} >
      
                          <div className="store-image" style={{backgroundImage:`url(${item.Image})`}}>
                          </div>
                        <center>
                          <div className="store-price">
                            <h3>{item.name} </h3>
                            <p>${item.price}</p>
                          </div>
                         
                          <button>Add to Cart</button>
                        </center>
                    </div>
                    )})}
                </div>



          </div>

    )

};


export default Store;