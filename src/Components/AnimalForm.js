import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




// this is the AnimalForm which I can add the animal name..... and I can submit



const emptyAnimal = {
    name: "",
    breed: "",
    image: "",
    origin: "",
    size: "",
    weight: "",
    age: ""
}


//A default prop is used when the props wasn't assigned by the parent to the child
// For example if a child has a prop "title" and the parent doesn't assign it any value, the child could use the default value "N/A"

//the AnimalForm takes the property onSubmit function that will be called when the form is submitted.

export default function AnimalForm({
    onSubmit = (a) => console.log("onSubmit not assigned", "animal", a) }
) {
    const [animal, setAnimal] = React.useState({ ...emptyAnimal })

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>

                    {/* adding an animal */}
                    <Card.Title>Add Animal</Card.Title>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit(animal);
                        setAnimal({ ...emptyAnimal })
                    }}>
                        {/* we add a Animal Name */}
                        <Form.Group className="mb-3" controlId="Animal-Name">
                            <Form.Label>AnimaName</Form.Label>
                            <Form.Control type="text" placeholder="Animal Name"
                                value={animal.name}
                                onChange={(e) => setAnimal({ ...animal, name: e.target.value })}
                            />
                        </Form.Group>

                        {/* we add an breed */}
                        <Form.Group className="mb-3" controlId="Breed">
                            <Form.Label>Animal breed</Form.Label>
                            <Form.Control type="text" placeholder="Enter Breed"
                                value={animal.breed}
                                onChange={(e) => setAnimal({ ...animal, breed: e.target.value })}
                            />
                        </Form.Group>

                        {/* we add image */}

                        <Form.Group className="mb-3" controlId="Image">
                            <Form.Label>Image</Form.Label>
                            {/* based on checked, it will indicate if the checkbox will be checked or not */}
                            <Form.Check type="checkbox"
                                checked={animal.image}
                                onChange={(e) => {
                                    setAnimal({ ...animal, image: !animal.image })
                                }} />
                        </Form.Group>

                        {/* we add origin */}
                        <Form.Group className="mb-3" controlId="Origin">
                            <Form.Label>Origin</Form.Label>
                            {/* based on checked, it will indicate if the checkbox will be checked or not */}
                            <Form.Check type="checkbox"
                                checked={animal.origin}
                                onChange={(e) => {
                                    setAnimal({ ...animal, origin: !animal.origin })
                                }} />
                        </Form.Group>

                        {/* we add size */}

                        <Form.Group className="mb-3" controlId="Size">
                            <Form.Label>Size</Form.Label>
                            {/* based on checked, it will indicate if the checkbox will be checked or not */}
                            <Form.Check type="checkbox"
                                checked={animal.size}
                                onChange={(e) => {
                                    setAnimal({ ...animal, size: !animal.size })
                                }} />
                        </Form.Group>

                        {/* we add weight */}
                        <Form.Group className="mb-3" controlId="Weight">
                            <Form.Label>Weight</Form.Label>
                            {/* based on checked, it will indicate if the checkbox will be checked or not */}
                            <Form.Check type="checkbox"
                                checked={animal.weight}
                                onChange={(e) => {
                                    setAnimal({ ...animal, weight: !animal.weight })
                                }} />
                        </Form.Group>
                        {/* we add age */}

                        <Form.Group className="mb-3" controlId="Age">
                            <Form.Label>Age</Form.Label>
                            {/* based on checked, it will indicate if the checkbox will be checked or not */}
                            <Form.Check type="checkbox"
                                checked={animal.age}
                                onChange={(e) => {
                                    setAnimal({ ...animal, age: !animal.age })
                                }} />
                        </Form.Group>

                        {/* the Submit button on the Form */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>



                </Card.Body>
            </Card>

        </div>
    )
}




