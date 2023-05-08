import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



/*this AnimalCard functional component takes several props: name, breed, image, origin, size, weight, age, id, onDelete, onUpdate and onChange.
It renders the bootstrap card component with animal info, it includes the properties and form control.
On the browser it shows the animal card with name, breed, image, origin, size, weight, age, submitmsg button */



function AnimalCard({
    name,
    breed,
    image,
    origin,
    size,
    weight,
    age,
    // onDelete = onDeleteDefault,
    // onUpdate = onUpdateDefault,
    // onChange = onChangeDefault
    handleSubmit,
    onChange,
    SubmitMsg,
}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Animal Name"
                                value={name}
                                name="name"
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Breed</Form.Label>
                            <Form.Control type="text" placeholder="Enter Breed"
                                value={breed}
                                name="breed"
                                onChange={onChange}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            {/* based on checked, it will indicate if the checkbox will be checked or not */}
                            <Form.Control type="text"
                                value={image}
                                name="image"
                                onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text"
                                value={origin}
                                name="origin"
                                onChange={onChange}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Size</Form.Label>
                            <Form.Control type="text"
                                value={size}
                                name="size"
                                onChange={onChange}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="number" min={0}
                                value={weight}
                                name="weight"
                                onChange={onChange}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" min={0}
                                value={age}
                                name="age"
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>{SubmitMsg}</Button>


                    </Form>
                </Card.Body>
            </Card >
        </div >
    );
}

export default AnimalCard;

