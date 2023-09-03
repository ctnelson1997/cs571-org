import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ToastsContext from "../../contexts/ToastsContext";
import { useNavigate } from "react-router";

function BadgerAuthCreateModal({
    show,
    close
}) {

    const {
        register,
        handleSubmit,
        setError,
        watch,
        trigger,
        clearErrors,
        resetField,
        setValue,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'onChange'
    });

    const navigate = useNavigate();

    const [toasts, addToast] = useContext(ToastsContext);


    const [nickname, setNickname] = useState("");
    const [expires, setExpires] = useState(false);
    const [expTime, setExpTime] = useState(0);
    const [expTimeUnit, setExpTimeUnit] = useState("weeks");

    const MS_TIME_MAPPER = {
        seconds: 1000,
        minutes: 1000 * 60,
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
        years: 1000 * 60 * 60 * 24 * 365,
    }

    const MAX_TOTAL_MS = MS_TIME_MAPPER.years * 7;

    const MAX_TIME_MAPPER = {
        seconds: MAX_TOTAL_MS / MS_TIME_MAPPER.seconds,
        minutes: MAX_TOTAL_MS / MS_TIME_MAPPER.minutes,
        hours: MAX_TOTAL_MS / MS_TIME_MAPPER.hours,
        days: MAX_TOTAL_MS / MS_TIME_MAPPER.days,
        weeks: MAX_TOTAL_MS / MS_TIME_MAPPER.weeks,
        years:  MAX_TOTAL_MS / MS_TIME_MAPPER.years
    }

    const calculateExpDate = () => {
        console.log(expTime)
        console.log(MS_TIME_MAPPER[expTimeUnit])
        return new Date(new Date().getTime() + (MS_TIME_MAPPER[expTimeUnit] * expTime))
    }

    const create = async (d, e) => {
        e.preventDefault();
        const res = await fetch("https://cs571.org/api/auth/add-bid-to-email", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: nickname ? nickname : undefined,
                eat: expires ? calculateExpDate() : undefined
            })
        })
        if (res.status === 200) {
            addToast({
                title: "Success!",
                body: "Successfully created a new Badger ID!",
                variant: "success",
                lifespan: 5
            })
            close();
        } else if (res.status === 401) {
            addToast({
                title: "Session Expired",
                body: "Your session has expired, please log back in.",
                variant: "warning",
                lifespan: 5
            })
            navigate('/auth')
        }
    }

    useEffect(() => {
        trigger('expTime')
    }, [expTimeUnit])

    useEffect(() => {
        if (!expires) {
            setExpTime(1);
            setExpTimeUnit("weeks");
            setValue('expTime', 1)
            resetField('expTimeUnit')
        }
    }, [expires]);

    return <Modal show={show}>
        <div style={{ padding: "1rem" }}>
            <Modal.Header>
                <h2>Create New Badger ID</h2>
            </Modal.Header>
            <p style={{marginTop:"0.25rem"}}>Issue a new Badger ID by optionally specifying a nickname (e.g. Meta Recruiter) and expiration time (e.g. 2 weeks).</p>
            <Form onSubmit={handleSubmit(create)}>
                <Form.Label htmlFor="nickname">Nickname (Optional)</Form.Label>
                <Form.Control
                    id="nickname"
                    placeholder="My Cool Badger Id"
                    value={nickname}
                    {...register('nickname', {
                        required: false,
                        maxLength: 128,
                        onChange: (e) => setNickname(e.target.value)
                    })}
                ></Form.Control>
                {errors.nickname && <p style={{ color: "maroon" }}>Nickname must be 128 characters or less.</p>}
                {!errors.nickname && <br />}
                <div style={{ display: "inline-flex" }}>
                    <Form.Check
                        id="doesExpire"
                        value={expires}
                        {...register('expires', {
                            required: false,
                            onChange: () => setExpires(e => !e)
                        })}
                    ></Form.Check>
                    <Form.Label htmlFor="doesExpire" style={{ marginLeft: "0.5rem" }}>Make ID Expire</Form.Label>
                </div>
                <br />
                {
                    expires && <>
                        <Form.Label htmlFor="expLength">Expires In...</Form.Label>
                        <br />
                        <div style={{ display: "inline-flex", width: "100%" }}>
                            <Form.Control
                                aria-label="Length of time until expiration"
                                type="number"
                                value={expTime}
                                {...register('expTime', {
                                    required: () => expires,
                                    pattern: /^[0-9]+$/,
                                    min: 1,
                                    validate: (val) => val <= MAX_TIME_MAPPER[expTimeUnit],
                                    onChange: (e) => setExpTime(e.target.value)
                                })}
                            ></Form.Control>
                            <Form.Select
                                id="expLength"
                                value={expTimeUnit}
                                {...register('expTimeUnit', {
                                    required: true,
                                    onChange: (e) => setExpTimeUnit(e.target.value)
                                })}
                            >
                                <option>minutes</option>
                                <option>hours</option>
                                <option defaultValue={true}>days</option>
                                <option>weeks</option>
                                <option>years</option>
                            </Form.Select>
                        </div>
                        {errors.expTime && <p style={{ color: "maroon" }}>Expiration must be an integer between 1 minute and 7 years.</p>}
                        {!errors.expTime && <br />}
                        {!errors.expTime && <br />}
                    </>
                }
                <Modal.Footer style={{marginTop: "0.5rem"}}>
                    <Button type="submit">Create Badger ID</Button>
                    <Button variant="secondary" onClick={close} style={{marginLeft: "0.5rem"}}>Cancel</Button>
                </Modal.Footer>
            </Form>
        </div>

    </Modal>
}

export default BadgerAuthCreateModal;