export function OptionRadio({value, selected, onChange, children}) {
    return (
        <div className={`option ${selected === value ? "selected" : ""}`}>
            <label>
                <input
                    type="radio"
                    name="choice"
                    value="{value}"
                    checked={selected === value}
                    onChange={() => onChange(value)}
                />
                {children}
            </label>
        </div>
    );
}