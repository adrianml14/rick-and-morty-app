import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        {
            characters.map((item, index)=> (
                <div key={index} className="col mb-4">
                    <div className='card' style={{minWidth: "200px"}}>
                        <img src={item.image} alt=''/>
                        <div className='card-body'>
                            <h5 className='card-ti'> {item.name}</h5>
                            <hr />
                            <p>especie: {item.species}</p>
                            <p>localización: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  );
};

export default Characters;
