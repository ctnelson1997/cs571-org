import { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Cookies from 'js-cookie';
import { useNavigate } from "react-router";
import ToastsContext from "../contexts/ToastsContext";

import Recaptcha from "react-google-recaptcha"


function BadgerAuthConfirmation(props) {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'onChange'
    });

    const [otp, setOTP] = useState("");
    const [captchaCompleted, setCaptchaCompleted] = useState(false);

    const captchaRef = useRef(null);

    const [toasts, addToast] = useContext(ToastsContext);

    const continueToManage = async (d, e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        const res = await fetch('https://cs571.org/api/auth/approve-verify-email', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: otp,
                captcha: token
            })
        })
        if (res.status === 200) {
            const data = res.json();
            navigate("/auth/manage")
            addToast({
                title: "Email Verified",
                body: "You may now manage your Badger IDs.",
                variant: "success",
                lifespan: 5
            })
        } else if (res.status === 401) {
            setOTP("");
            setError("otp")
            addToast({
                title: "Invalid OTP",
                body: "Sorry, the one-time passcode you specified was not valid.",
                variant: "warning",
                lifespan: 5
            })
        } else if (res.status === 418) {
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

    return <div>
        <p>A confirmation code has been sent from <strong>uw.cs571@gmail.com</strong> to <strong>{Cookies.get("cs571_otp")}</strong> to confirm your identity.</p>
        <p>Please enter the 12 character code below. If you did not recieve an email, check your spam/junk box or try again in a few minutes. If you still do not recieve a code, contact the instructional staff.</p>
        <Form onSubmit={handleSubmit(continueToManage)}>
            <Form.Control
                placeholder="abcdef123456"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                value={otp}
                style={{ maxWidth: "10rem" }}
                {...register('otp', {
                    required: true,
                    pattern: /^[0-9a-fA-F]{12}$/,
                    onChange: (e) => setOTP(e.target.value)
                })}></Form.Control>
            <br />
            <Recaptcha
                onChange={(token) => {
                    if (token) {
                        setCaptchaCompleted(true);
                    }
                }}
                sitekey="6LdoX_gnAAAAAGaseOd6ceFdGzWIO8YMPV9w3Daj"
                ref={captchaRef}
            />
            <br />
            <Button type="submit" disabled={!isValid || !captchaCompleted}>Confirm</Button>
        </Form>
        {errors.otp && <p style={{ color: "maroon" }}>Please enter a valid code.</p>}
        {!errors.otp && <p></p>}
        <p>CS571 course staff and information systems will <strong>NEVER</strong> send you links or ask for personal information.</p>
    </div>
}

export default BadgerAuthConfirmation;