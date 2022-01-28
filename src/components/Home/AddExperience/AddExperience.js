import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Rating from 'react-rating';
import startEmpty from '../../../images/star-empty.png'
import startFull from '../../../images/star-full.png'
import useAuth from '../../../hooks/useAuth';


const AddExperience = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [myRating, setMyRating] = useState(0);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleReviewCange = (fullSymbol) => {

        setMyRating(fullSymbol);
    }
    const onSubmit = data => {
        const dataInfo = {
            ...data,
            name: user.displayName,
            photo: user.photoURL,
            rating: myRating,
            status: "pending",
        }
        axios.post('https://guarded-earth-89233.herokuapp.com/blog', dataInfo)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset();
                }
            })
    }

    return (
        <div className='container textarea my-4'>
            <div className="col-md-8  mx-auto py-5 ">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Description">
                            <Form.Label><b className='text-white'>Share your experience</b></Form.Label>
                            <textarea className='w-100' style={{ height: '100px' }} type="text" placeholder="Description"   {...register("description", { required: true })} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <div className="my-rating">
                            <Rating
                                fullSymbol={<img src={startFull} alt="starfull" className="icon" />}
                                emptySymbol={<img src={startEmpty} alt="startEmpty" className="icon" />}
                                onClick={handleReviewCange}
                            />

                        </div>
                    </Row>
                    {success && <div className="alert alert-success" role="alert">
                        Added your experience Successfully!
                    </div>}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <Button className='mt-4' variant="outline-primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddExperience;