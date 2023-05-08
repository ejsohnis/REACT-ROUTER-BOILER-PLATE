import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import { getAnimals, deleteAnimal } from '../Services/animal'
import DogTableRow from './DogTableRow';
import DogUpdate from './DogUpdate';

//handling delete and update and building the table head

function Dogs() {
    const history = useHistory();//useHistory Hook provides access to browser, allow navigation and changing the url
    const match = useRouteMatch() //returns the current match object of a route.
    //handleClick uses the history object to navigate to url path `/dogsummary/${id}`when called with an `id` argument.
    const handleClick = (id) => history.push(`/dogsummary/${id}`);
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        getAnimals()
            .then((response) => {
                setAnimals([...response]) //sets the state variable 'animals' to a copy of the 'response' array.
            })
    }, [])

    const handleDelete = (id) => {
        deleteAnimal(id) /*delete specific dog associated with this id*/
            .then(res => {
                getAnimals()
                    .then((response) => {
                        setAnimals([...response]) /*updating data on the browser*/
                    })
                if (res.ok) {
                    return res.json();
                }
                // handle error
            }).catch(error => {
                console.log(error);

            })
    }

    //list of Dogs' info with table head under Dogs
    return (
        <div className="container">
            <h2>List of Dogs</h2>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Origin</th>
                        <th scope="col">Size</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Age</th>
                        <th scope="col">Show Dog</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        //this is conditional rendering, it checks if the 'animals' array has element and then maps over each element to render 'DogTableRow' component for each of them. 

                        //handling the update and delete function.

                        animals.length > 0 && animals.map((animal, idx) => <DogTableRow
                            idx={idx}
                            key={animal.id}
                            animal={animal}
                            // the updateDog contains a path to a specific dog's page for updating a specific dog.
                            updateDog={`${match.path}/dog/${animal.id}`}
                            deleteDog={() => handleDelete(animal.id)} //when deleteDog function called, it will execute the handleDelete function with the id of the animal and delete it.
                            onClick={() => handleClick(animal.id)} />
                        ) //the button created triggers the handleClick function with id of the animal
                    }
                </tbody>
            </table>
            <Switch>
                <Route
                    path={`${match.path}/dog/:dogId`}
                    render={(props) => <DogUpdate
                        currentDogs={animals}
                        setCurrentDogs={setAnimals}
                    />}
                />
            </Switch>
        </div>

    )
}



export default Dogs