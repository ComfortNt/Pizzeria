
import '../Styles/Store.css'
import List from '../Componets/Items';

function Store(){
      

    return(
        
        <div className="store"> 

           

              <div className="store-grid">
                
                        {
                        List.map( (item , key) =>{ return(

                    <div className="store-card">
      
                          <div className="store-image" style={{backgroundImage:`url(${item.Image})`}}>
                          </div>

                          <div className="store-price">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                          </div>
                          <button>Add to Cart</button>
                    </div>
                    )})}
                </div>
          </div>

    )

};


export default Store;