import React, { useState, useEffect } from 'react'
import { getAnimal, getAnimals, putAnimal } from '../Services/animal'
import { useParams } from 'react-router-dom';
import AnimalCard from './AnimalCard';

// Updating current dogs, get the id from url and updates the specific dog

function DogUpdate({ currentDogs, setCurrentDogs }) {
    const { dogId } = useParams()
    const [updateDog, setUpdateDog] = useState({})

    useEffect(() => {
        getAnimal(dogId)
            .then(response => {
                console.log(response)
                setUpdateDog(response) /*reponse came and plugged into setUpdateDog*/

            })
            .catch(error => {
                console.log(error)
            })
        //   this empty array in square brackets indicates that useEffect will run (execute) once after html is rendred on the browser (ex.<div>DogUpdate</div>)
    }, [dogId]) /*anytime you click on a new id, useEffect would execute*/


    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        console.log(updateDog)
        putAnimal(dogId, updateDog)
            .then(() => {
                // history.push("/dogs")
                getAnimals()
                    .then((response) => {
                        setCurrentDogs([...response])
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    })
            })
            .catch(error => {
                console.log(error)

            })
    }
    // handle the change on the form input so it will save it to the variable updateDog.
    // we want to get the input from the form element. 
    // we destructuring the target for name and value

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateDog({
            ...updateDog, /*... is update info on old information*/
            [name]: value
        })

    }


    return (
        <div>
            {/* Adding values to the props */}
            <AnimalCard
                name={updateDog.name}
                breed={updateDog.breed}
                image={updateDog.image}
                origin={updateDog.origin}
                size={updateDog.size}
                weight={updateDog.weight}
                age={updateDog.age}

                handleSubmit={handleUpdateSubmit}
                onChange={handleChange}
                SubmitMsg="Update Dog"

            />
        </div>
    )
}


export default DogUpdate