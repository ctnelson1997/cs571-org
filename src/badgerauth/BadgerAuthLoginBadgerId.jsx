import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ToastsContext from "../contexts/ToastsContext";

function BadgerAuthLoginBadgerId() {

    const [badgerId, setBadgerId] = useState("");

    const navigate = useNavigate();

    const [toasts, addToast] = useContext(ToastsContext)

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'onChange'
    });

    useEffect(() => {
        (async () => {
            const res = await fetch("https://cs571.org/api/auth/what-is-my-bid?cache=false", {
                method: "GET",
                credentials: "include"
            })
            if (res.status === 200) {
                navigate('/auth/logout');
            }
        })()
    }, [])

    const submit = async (d, e) => {
        const res = await fetch("https://cs571.org/api/auth/request-cookie-for-bid", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bid: badgerId
            })
        })
        if (res.status === 200) {
            addToast({
                title: "Logged In",
                body: `You are now using the Badger ID starting with ${badgerId.substring(4, 11)}. You may continue using the APIs.`,
                variant: "success",
                lifespan: 15
            })
            navigate('/')
        } else {
            addToast({
                title: "Invalid Badger ID",
                body: `Sorry, that is an invalid Badger ID.`,
                variant: "warning",
                lifespan: 5
            })
        }
        e.preventDefault();
    }

    return <>
        <p>To use the APIs for CS571, please enter your Badger ID below. A Badger ID starts with <strong>bid_</strong> or <strong>bid_fa_</strong> followed by many hexidecimal characters. You should have recieved this ID via email from <strong>uw.cs571@gmail.com</strong>. Be sure to check your spam/junk folder.</p>
        <p>If you did not recieve this ID, you can issue one by clicking <Link to="/auth/manage">BadgerAuth &gt; Manage BadgerIDs</Link>. If you continue to have issues, please contact instructional staff.</p>
        <Form onSubmit={handleSubmit(submit)}>
            <Form.Control
                placeholder="bid_abcdef123456"
                value={badgerId}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                {...register('badgerId', {
                    required: true,
                    pattern: /^bid_(fa_)?[0-9a-fA-F]{64}$/,
                    onChange: (e) => setBadgerId(e.target.value)
                })}></Form.Control>
            {errors.badgerId && <p style={{ color: "maroon" }}>Please enter a valid Badger ID.</p>}
            {!errors.badgerId && <p></p>}
            <Button type="submit">Use This Badger ID</Button>
        </Form>
    </>
}

export default BadgerAuthLoginBadgerId;