import React,{useRef} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { async } from 'regenerator-runtime';

const NewPoll = props => {
    const candidateName1 = useRef();
    const candidateName2 = useRef();
    
    const candidateName1URL = useRef();
    const candidateName2URL = useRef();


    const promptRef = useRef();

    const sendToBlockchain = async()=>{
        await window.contract.addUrl({
            name: candidateName1.current.value,
            url: candidateName1URL.current.value
        }
        );

        await window.contract.addUrl({
            name: candidateName2.current.value,
            url: candidateName2URL.current.value
        }
        );


        await window.contract.addCandidatePair({
            prompt:promptRef.current.value,
            name1:candidateName1.current.value,
            name2:candidateName2.current.value,
        });


        await window.contract.addToPromptArray({prompt:promptRef.current.value})
    };




    return (
        <Container style={{marginTop:"10px"}}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Candidate 1 Name</Form.Label>
                    <Form.Control ref={candidateName1} placeholder="Enter Candidate Name"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Candidate 1 Image Url</Form.Label>
                    <Form.Control ref={candidateName1URL} placeholder='Enter image URL'></Form.Control>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Candidate 2 Name</Form.Label>
                    <Form.Control ref={candidateName2} placeholder="Enter Candidate Name"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Candidate 2 Image Url</Form.Label>
                    <Form.Control ref={candidateName2URL} placeholder='Enter image URL'></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Prompt</Form.Label>
                    <Form.Control ref={promptRef} placeholder="Add Prompt"></Form.Control>
                </Form.Group>
            </Form>
            <Button onClick={sendToBlockchain} variant='primary'>
                    submit
            </Button>
        </Container>
    );
};



export default NewPoll;