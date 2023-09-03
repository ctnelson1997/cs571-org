import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ToastsContext from "../contexts/ToastsContext";

function BadgerAuthLogoutBadgerId() {

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
            const res = await fetch("https://cs571.org/api/auth/what-is-my-bid", {
                method: "GET",
                credentials: "include"
            })
            if (res.status === 200) {
                setBadgerId((await res.json()).bid);
            } else {
                navigate('/auth/login')
            }
        })()
    }, [])

    const submit = async (d, e) => {
        const res = await fetch("https://cs571.org/api/auth/remove-cs571-bid-cookie", {
            method: "DELETE",
            credentials: "include"
        })
        if (res.status === 200) {
            addToast({
                title: "Logged Out",
                body: `You have successfully logged out.`,
                variant: "success",
                lifespan: 15
            })
            navigate('/')
        }
        e.preventDefault();
    }

    return <>
        {
            badgerId ? <>
                <p>You are currently logged in using Badger ID starting with {badgerId.substring(4, 11)}.</p>
                <p>Would you like to logout?</p>
                <p><strong>You will not be able to use CS571 APIs until you are logged back in.</strong></p>
                <Form onSubmit={handleSubmit(submit)}>
                    <Button type="submit" variant="danger">Logout</Button>
                </Form>
            </> :
                <>
                    <p>Loading, please wait...</p>
                </>
        }
    </>
}

export default BadgerAuthLogoutBadgerId;