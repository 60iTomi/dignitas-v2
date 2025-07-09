import { OptionRadio } from "./formInputs";
import { FormButtonNext } from "./formButtons";
import React, { useState } from "react";
import { Form } from "react-router-dom";

export function ReportForm() {
    const [selected, setSelected] = useState("codeNotWorking");
    return (
        <div className="container">
            <h1>Mi a baj?</h1>
                <form>
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
                    <FormButtonNext />
                </form>
            </div>
    );
}