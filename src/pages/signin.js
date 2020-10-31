import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer'
import { Form } from '../components';
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase';

export default function Signin() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = emailAddress === '' | password === ''

    const handleSignin = event => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('')
                setPassword('')
                setError('')
                history.push(ROUTES.BROWSE)
            }).catch(error => {
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit type="submit" disabled={isInvalid}>
                            Sign In
                    </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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