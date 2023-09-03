import { useState } from "react";

import { BounceLoader } from "react-spinners"; 

export default function useSpinner({ name, component, initialState }) {

    const [disp, setDisp] = useState(component);
    const [loading, setLoading] = useState(initialState);

    function start() {
        setLoading(true);
    }

    function stop() {
        setLoading(false);
    }

    function display () {
        if (loading) {
            return <div>
                <BounceLoader color="#BA0C2F" size={150} style={{
                    position: "fixed",
                    zIndex: 9999,
                    top: "50%",
                    left: "50%"
                }} />
                <div className="fade-overlay">
                </div>
                {disp}
            </div>
        } else {
            return disp
        }
    }

    return {
        start,
        stop,
        display
    }
    
}