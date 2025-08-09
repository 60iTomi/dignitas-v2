import { OptionRadio } from "./";
import { FormButtonNext } from "./";
import { motion } from "framer-motion";
import React, { useState } from "react";

export function ReportForm({ onFinished }) {
    const [selected, setSelected] = useState("");
    const [unmounting, setUnmounting] = useState(false);
    return (
        <motion.div
            className="container"
            initial={{ opacity: 0, y: 0 }}
            animate={unmounting ? { opacity: 0, x: 300 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <h1>Mi a baj?</h1>
            <form>
                <div className="options">
                    <OptionRadio value="codeNotWorking" selected={selected} onChange={setSelected}>
                        A kód nem működött.
                    </OptionRadio>
                    <OptionRadio value="dirty" selected={selected} onChange={setSelected}>
                        A mosdó koszos volt.
                    </OptionRadio>
                    <OptionRadio value="outOfOrder" selected={selected} onChange={setSelected}>
                        A mosdó nem működött.
                    </OptionRadio>
                    <OptionRadio value="dangerous" selected={selected} onChange={setSelected}>
                        A mosdó megközelítését veszélyesnek találtam.
                    </OptionRadio>
                    </div>
                    <FormButtonNext onClick={
                            () => {
                                setUnmounting(true);
                                setTimeout(() => {
                                    onFinished();
                                }, 400);
                            }
                        } disabled={selected === ""}/>
                </form>
            </motion.div>
    );
}

export function ThankYouSplash() {
    return (
        <motion.div 
        className="thanks container"
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, transitionTimingFunction: "cubic-bezier(0.4, 0.2, 0.2, 1.2)" }}>
            <h1>Köszönjük a visszajelzésed!</h1>
        </motion.div>
    );
}