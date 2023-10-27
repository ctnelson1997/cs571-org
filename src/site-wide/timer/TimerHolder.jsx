import { useState } from "react"
import TimerGo from "./TimerGo";
import TimerForm from "./TimerForm";

export default function TimerHolder(props) {
    const [isOnForm, setIsOnForm] = useState(true);
    const [startDt, setStartDt] = useState();
    const [endDt, setEndDt] = useState();
    const [showSeconds, setShowSeconds] = useState();

    const goOn = (st, en, ss) => {
        setIsOnForm(false);
        setStartDt(st);
        setEndDt(en);
        setShowSeconds(ss)
    }

    return <div style={{textAlign: "center"}}>
        {
            isOnForm && !startDt && !endDt ? <TimerForm goOn={goOn} /> : <TimerGo startDt={startDt} endDt={endDt} showSeconds={showSeconds}/>
        }
    </div>
}