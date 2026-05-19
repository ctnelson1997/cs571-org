import { useMemo, useState } from "react"
import TimerGo, { TIMER_STORAGE_KEY } from "./TimerGo";
import TimerForm from "./TimerForm";

function loadSavedExam() {
    let raw;
    try {
        raw = localStorage.getItem(TIMER_STORAGE_KEY);
    } catch (_) {
        return null;
    }
    if (!raw) return null;
    try {
        const data = JSON.parse(raw);
        const endDt = data?.endDt ? new Date(data.endDt) : null;
        if (!endDt || isNaN(endDt.getTime()) || endDt.getTime() <= Date.now()) {
            localStorage.removeItem(TIMER_STORAGE_KEY);
            return null;
        }
        return {
            endDt,
            showSeconds: !!data.showSeconds,
            isPaused: !!data.isPaused,
            notes: Array.isArray(data.notes) ? data.notes : []
        };
    } catch (_) {
        try { localStorage.removeItem(TIMER_STORAGE_KEY); } catch (_) { /* noop */ }
        return null;
    }
}

export default function TimerHolder(props) {
    const saved = useMemo(() => loadSavedExam(), []);
    const [restoredOnce, setRestoredOnce] = useState(!!saved);
    const [isOnForm, setIsOnForm] = useState(!saved);
    const [startDt, setStartDt] = useState(saved ? new Date() : undefined);
    const [endDt, setEndDt] = useState(saved?.endDt);
    const [showSeconds, setShowSeconds] = useState(saved?.showSeconds ?? false);

    const goOn = (st, en, ss) => {
        setIsOnForm(false);
        setStartDt(st);
        setEndDt(en);
        setShowSeconds(ss);
    }

    const onCancel = () => {
        try { localStorage.removeItem(TIMER_STORAGE_KEY); } catch (_) { /* noop */ }
        setRestoredOnce(false);
        setStartDt(undefined);
        setEndDt(undefined);
        setShowSeconds(false);
        setIsOnForm(true);
    }

    return <div style={{textAlign: "center"}}>
        {
            isOnForm && !startDt && !endDt
                ? <TimerForm goOn={goOn} />
                : <TimerGo
                    key={startDt ? startDt.getTime() : "saved"}
                    startDt={startDt}
                    endDt={endDt}
                    showSeconds={showSeconds}
                    initialNotes={restoredOnce ? saved?.notes : undefined}
                    initialIsPaused={restoredOnce ? saved?.isPaused : undefined}
                    onCancel={onCancel}
                />
        }
    </div>
}
