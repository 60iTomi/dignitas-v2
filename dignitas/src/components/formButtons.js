export function FormButtonNext({ onClick, disabled }) {
    return (
        <div className="buttonLine">
            <button
            type="button"
            className="formButtonNext"
            onClick={onClick}
            disabled={disabled}
        >
            <span className="materialIcons">arrow_forward</span>
        </button>
        </div>
        
    );
}