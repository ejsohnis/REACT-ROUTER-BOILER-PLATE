import React from 'react'
import { Link } from 'react-router-dom'
import DogUpdate from './DogUpdate'


//function DogTableRow renders the table row with information about a dog.
//it takes in the props and onClick updateDog and deleteDog. 
//it shows the dog info on the browser and also renders the onClick, updateDog and deleteDog

function DogTableRow({ idx, animal, onClick, updateDog, deleteDog }) {
    return (
        <tr>
            <th scope="row">{idx + 1}</th>
            <td>{animal.name}</td>
            <td>{animal.breed}</td>
            <td>{animal.origin}</td>
            <td>{animal.size}</td>
            <td>{animal.weight}</td>
            <td>{animal.age}</td>
            <td onClick={onClick}><i className='fa-solid fa-paw'></i></td>
            <td><Link to={updateDog}><i className='fa-solid fa-file-pen'></i></Link></td>
            <td onClick={deleteDog}><i className='fa-solid fa-trash-can'></i></td>
        </tr >)
}

export default DogTableRow