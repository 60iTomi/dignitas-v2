export function FormButtonNext({ onClick, disabled }) {
    return (
        <button
            className="formButtonNext"
            onClick={onClick}
            disabled={disabled}
        >
            Tovább
        </button>
    );
}