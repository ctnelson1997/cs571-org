import { useContext, useEffect, useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useSpinner from "../hooks/UseSpinner";
import SpinnerContext from "../contexts/SpinnerContext";
import ToastsContext from "../contexts/ToastsContext";

import Recaptcha from "react-google-recaptcha"

function BadgerAuthHome(props) {

    const captchaRef = useRef(null);

    const EMAIL_REGEX = /^.*@(cs\.)?wisc\.edu$/;

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'onBlur'
    });

    const [toasts, addToast] = useContext(ToastsContext);

    const [email, setEmail] = useState("");
    const [blurred, setBlurred] = useState(true);
    const [captchaCompleted, setCaptchaCompleted] = useState(false);

    const spinner = useContext(SpinnerContext);

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
        <p>Use this area to manage the Badger ID(s) associated with your account.</p>
        <p>Please note that Badger IDs currently <em>cannot</em> be generated for the Spring 2023 semester. If you would like access to this legacy API, please contact the instructional team.</p>
        <p>Please note that due to hosting constraints, Fall 2023 Badger IDs can only be generated for University of Wisconsin-Madison students. Another version of this website will be publically available at the end of the semester at <a href="http://cs571forall.org/">cs571forall.org</a>.</p>
        <hr></hr>
        <Form style={{ marginBottom: "0.5rem" }} onSubmit={handleSubmit(manageBids)}>
            <Form.Label htmlFor="email" style={{ marginBottom: "0.25rem" }}>What is your wisc email address?</Form.Label>
            <Form.Control
                id="email"
                type="email"
                value={email}
                placeholder="bbadger@wisc.edu"
                {...register('email', {
                    required: true,
                    pattern: EMAIL_REGEX,
                    onChange: (e) => { setEmail(e.target.value); setBlurred(false); },
                    onBlur: () => setBlurred(true),
                })}
            ></Form.Control>
            {errors.email && <p style={{ color: "maroon" }}>Please enter a valid Wisconsin email address.</p>}
            {email && blurred && email.match(EMAIL_REGEX) && <sub>A confirmation email will be sent to <strong>{email}</strong>.</sub>}
            {!errors.email && <p></p>}
            <Form.Label htmlFor="sem" style={{ marginBottom: "0.25rem" }}>Please choose your semester.</Form.Label>
            <Form.Select
                id="sem"
                {...register('semester', {
                    required: "true",
                    pattern: /^Fall 2023$/
                })}
            >
                <option defaultValue={true}>Choose your semester...</option>
                <option disabled={true}>Spring 2023</option>
                <option>Fall 2023</option>
            </Form.Select>
            {errors.semester && <p style={{ color: "maroon" }}>Please choose a semester.</p>}
            {!errors.semester && <br />}
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