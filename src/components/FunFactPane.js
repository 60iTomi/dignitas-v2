export default function FunFactPane({symbol, title, body}) {
    return (
            <div className="body-subcontainer funsies">
                    <span className="material-symbols-outlined funsies">{symbol}</span>
                    <h2 className="funsies">{title}</h2>
                    <p className="funsies">{body}</p>
            </div>
    )
}

