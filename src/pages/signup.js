import React, {useState, useContext} from 'react'
import {HeaderContainer} from '../containers/header'
import {useHistory} from 'react-router-dom'
import {FooterContainer} from '../containers/footer'
import * as ROUTES from '../constants/routes'
import {Form} from '../components'
import { FirebaseContext } from '../context/firebase'

export default function SignUp(){

    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    //validation
    const isInvalid = password === '' | emailAddress ==='' | firstName === ''

    //handleSignup
    const handleSignin = (event) => {
        event.preventDefault();
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor( Math.random * 5 ) + 1
                })
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            ).catch((error) => { 
                setEmailAddress('')
                setPassword('')
                setError(error.message) 
            })
    }


    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error> }
                
                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                        placeholder="First Name"
                        value={firstName}
                        onChange={({target})=> setFirstName(target.value)}
                    />
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({target})=> setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="password"
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit 
                        disabled={isInvalid}
                        type="submit"
                        >
                        Sign Up
                    </Form.Submit>

                    <Form.Text>
                        Already a user?  <Form.Link to="/signin">Sign in now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}