import React, { useEffect, useState } from "react";
import { HomeContainer,Title, Form, Input, Button, Container, Card, GetForm } from './styles';
import { LogoCITi } from '../../assets';
import axios from "axios";
import apiAxios from "../../services/api";

type User = {
    firstName: string;
    lastName: string;
    age: number;
}

export const Home: React.FC = () => {

    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [age, setAge ] = useState("");
    const [ userList, setUserList ] = useState<[]>([]);
    const [user, setUser] = useState<User[]>([])

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

    const handleGet = async () => {
        await apiAxios.get('/user')
         .then((value) => {setUserList(value.data)})
         .catch(err => {console.log(err)})
     
        const listLenght = userList.length

        const randomNum = Math.floor(Math.random() * (listLenght))

        setUser(userList[randomNum])
        console.log('user', user)
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
                    <Button onClick={handleGet} > get user </Button>
                    <div style={{display: "flex", flexDirection: 'row'}}>
                        <Card>
                            <p>first name:  </p>
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