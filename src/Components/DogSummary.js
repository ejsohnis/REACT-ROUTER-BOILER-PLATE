import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAnimal } from '../Services/animal'
import Dogs from './Dogs';
import DogTableRow from './DogTableRow';

//after creating the new animal, the summary of the animal info appears on the browser

const emptyAnimal = {
    name: "",
    breed: "",
    image: "",
    origin: "",
    size: "",
    weight: "",
    age: ""
}

// function DogSummary function gets the animal than update it with the previous data.


// useParam gets the id from the url which is the id number of the animal
function DogSummary() {
    const { id } = useParams();
    // animal represents a variable; setAnimal represent a function which updates the varibale, and useState creates the variable and the function.
    const [animal, setAnimal] = useState(emptyAnimal)
    // useEffect will execute only once because of the empty Array, after the ui render
    useEffect(() => {
        getAnimal(id)
            .then((response) => {
                console.log(response);
                setAnimal({ ...response })
            })
    }, [])

    // here is the summary of the animal information
    return (
        <div className="container p-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={animal.image} />
                <div className="card-body">
                    <h5 className="card-title">Name {animal.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Breed {animal.breed}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Origin {animal.origin}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Size {animal.size}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Weight {animal.weight}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Age {animal.age}</h6>



                </div>
            </div>


        </div>
    )
}

export default DogSummary