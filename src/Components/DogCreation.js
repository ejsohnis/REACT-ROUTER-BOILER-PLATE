import React, { useState } from 'react'
import AnimalForm from './AnimalForm'
import AnimalCard from './AnimalCard'
import { postAnimal } from '../Services/animal';

//Creation of new animal

const animal = {
    name: "",
    breed: "",
    image: "",
    origin: "",
    size: "",
    weight: "",
    age: ""
}

//here is the function that handle DogCreation

function DogCreation() {
    const [newAnimal, setNewAnimal] = useState(animal)
    const [createdAnimal, setCreatedAnimal] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        postAnimal(newAnimal)
            .then(data => {
                setNewAnimal(animal)
                setCreatedAnimal(newAnimal)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAnimal({
            ...newAnimal, /*... is update info on old information*/
            [name]: value
        })

    }
    return (

        //here we have the new data passing into AnimalCard

        <div className='container'>
            <AnimalCard
                name={newAnimal.name}
                breed={newAnimal.breed}
                image={newAnimal.image}
                origin={newAnimal.origin}
                size={newAnimal.size}
                weight={newAnimal.weight}
                age={newAnimal.age}
                handleSubmit={handleSubmit}
                onChange={handleChange}
                SubmitMsg={"Create Dog"}
            />
            <div>
                {
                    //here we create the animal info

                    createdAnimal.name !== undefined && <>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src={createdAnimal.image} />
                                <h5 className="card-title">Name {createdAnimal.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Breed {createdAnimal.breed}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Origin {createdAnimal.origin}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Size {createdAnimal.size}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Weight {createdAnimal.weight}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Age {createdAnimal.age}</h6>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default DogCreation