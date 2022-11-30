import React, { useState } from "react";
import { HomeContainer,Title, Form, Input, Button, Container, Card, GetForm } from './styles';
import { LogoCITi } from '../../assets';
import axios from "axios";
import apiAxios from "../../services/api";

export const Home: React.FC = () => {

    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [age, setAge ] = useState("");

    const handleSubmit = () => {
        apiAxios.post('/user',
        {
            "firstName": firstName,
            "lastName": lastName,
            "age" : age
        }
        ).then(log => {console.log(log)})
         .catch(err => {console.log(err)})

        console.log(firstName, lastName, age);
    };

    return (
        <HomeContainer>
            <img src={LogoCITi} alt="" />
            <h1>ReactJS Boilerplate</h1>
            <Container>
                <Form >
                    <Title>User information</Title>
                
                    <p>first name: <Input type="text" onChange={value => setFirstName(value.target.value)}/> </p>
                    <p>last name: <Input type="text" onChange={value => setLastName(value.target.value)}/> </p>
                    <p>age: <Input type="text" onChange={value => setAge(value.target.value)} /> </p>

                    <Button onClick={handleSubmit} > submit </Button>
                </Form>

                <Form >
                    <Title> Get user </Title>
                    <Button > get user </Button>
                    <div style={{display: "flex", flexDirection: 'row'}}>

                        <Card>
                            <p>first name: aaaaaa </p>
                            <p>last name: </p>
                            <p>age: </p>
                        </Card>
                    </div>
                </Form>
            </Container>

            <p>
                Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&hearts;</strong>
                {' '}
                by CITi
            </p>
        </HomeContainer>
    );
}