import { useState } from "react"
import TimerGo from "./TimerGo";
import TimerForm from "./TimerForm";

export default function TimerHolder(props) {
    const [isOnForm, setIsOnForm] = useState(true);
    const [startDt, setStartDt] = useState();
    const [endDt, setEndDt] = useState();

    const goOn = (st, en) => {
        setIsOnForm(false);
        setStartDt(st);
        setEndDt(en);
    }

    return <div style={{textAlign: "center"}}>
        {
            isOnForm && !startDt && !endDt ? <TimerForm goOn={goOn} /> : <TimerGo startDt={startDt} endDt={endDt}/>
        }
    </div>
}