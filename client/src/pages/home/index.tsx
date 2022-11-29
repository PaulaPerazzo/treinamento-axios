import React from "react";
import { HomeContainer } from './styles';
import { LogoCITi } from '../../assets';
import axios from "axios";
import { useState, useEffect } from "react";

export const Home: React.FC = () => {

    const [ advice, setAdvice ] = useState('')
    
    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
            .then(res => {setAdvice(res.data.slip.advice)})
            .catch(err => {console.log(err)})
    }, [])

    return (
        <HomeContainer>
            <img src={LogoCITi} alt="" />
            <h1>ReactJS Boilerplate</h1>
            <p> {advice} </p>
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