import { useContext, useEffect, useState, useRef } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useSpinner from "../hooks/UseSpinner";
import SpinnerContext from "../contexts/SpinnerContext";
import ToastsContext from "../contexts/ToastsContext";

import Recaptcha from "react-google-recaptcha"

function BadgerAuthHome(props) {

    const captchaRef = useRef(null);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'onBlur'
    });

    const [toasts, addToast] = useContext(ToastsContext);

    const [email, setEmail] = useState("");
    const [blurred, setBlurred] = useState(true);
    const [captchaCompleted, setCaptchaCompleted] = useState(false);

    const spinner = useContext(SpinnerContext);

    const handleBlur = () => {
        fetch("https://cs571.org/api/auth/email-allow?email=" + email)
        .then(res => res.json())
        .then(d => {
            if (d.allowed) {
                clearErrors("email")
            } else {
                setError("email")
            }
            setBlurred(true)

        })
    }

    const manageBids = async (d, e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        spinner.start();
        const res = await fetch('https://cs571.org/api/auth/request-verify-email', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                captcha: token
            })
        })
        spinner.stop();
        if (res.status === 200) {
            const data = res.json();
            addToast({
                title: "Email Sent",
                body: "An email has been sent to " + email + " with your one-time passcode.",
                variant: "success",
                lifespan: 5
            })
            navigate("/auth/otp")
        } else if(res.status === 418){
            addToast({
                title: "Invalid Captcha",
                body: "Your CAPTCHA was invalid. Are you a robot?",
                variant: "warning",
                lifespan: 5
            })
        } else {
            addToast({
                title: "Oops!",
                body: "Something went wrong. Try again in a little bit.",
                variant: "warning",
                lifespan: 5
            })
        }

    }

    useEffect(() => {
        (async () => {
            const res = await fetch('https://cs571.org/api/auth/get-my-bids', {
                credentials: "include"
            })
            if (res.status === 200) {
                navigate('/auth/manage')
            }
        })()
    }, [])

    return <div>
        <p>Use this area to access and manage the Badger ID associated with your account. <strong>If you are a UW student, <a target="_blank" href="https://cs571api.cs.wisc.edu/ui/">please use this webpage instead.</a></strong></p>
        <Form style={{ marginBottom: "0.5rem" }} onSubmit={handleSubmit(manageBids)}>
            <Form.Label htmlFor="email" style={{ marginBottom: "0.25rem" }}>What is your email address?</Form.Label>
            <Form.Control
                id="email"
                type="email"
                value={email}
                placeholder="pete@uwplatt.edu"
                {...register('email', {
                    required: true,
                    onChange: (e) => { setEmail(e.target.value); setBlurred(false); },
                    onBlur: handleBlur,
                })}
            ></Form.Control>
            {errors.email && <p style={{ color: "maroon" }}>Please enter a valid email address.</p>}
            {email && blurred && <sub>A confirmation email will be sent to <strong>{email}</strong>.</sub>}
            {!errors.email && <p></p>}
            <Recaptcha
                onChange={(token) => {
                    if (token) {
                        setCaptchaCompleted(true);
                    }
                }}
                sitekey="6LdoX_gnAAAAAGaseOd6ceFdGzWIO8YMPV9w3Daj"
                ref={captchaRef}
            />
            <br/>
            <Button type="submit" variant="primary" disabled={!isValid || !captchaCompleted}>Continue</Button>
            <br />
            {(isDirty && !isValid && !captchaCompleted) && <sub>All fields must be complete before submitting.</sub>}
        </Form>
        <br />
    </div>
}

export default BadgerAuthHome;