import { Tab } from 'bootstrap';
import React from 'react';
import {Table, Container, Button} from 'react-bootstrap';

const Home = (props) => {
    
    const promptList=["Who will win the Elections?"];
    
    return (
        <Container>
            <Table style={{ margin: "5vh"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of Polls</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       promptList.map((el,index)=>{
                           return(<tr key={index}>
                               <td>{index + 1}</td>
                               <td>{el}</td>
                               <td>
                                   {" "}
                                   <Button onClick={()=> props.changeCandidates(el)} >Go to Poll</Button>
                               </td>
                           </tr>);
                       })
                   }
                </tbody>
            </Table>
        </Container>
    )
    
};


export default Home;