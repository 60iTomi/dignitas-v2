export default function FunFactPane({symbol, title, title2, body}) {
    return (
            <div className="body-subcontainer funsies">
                    <span className="material-symbols-outlined funsies">{symbol}</span>
                    <div className="title-container">
                        <h2 className="funsies">{title}</h2>
                        <h2 className="funsies special">{title2}</h2>
                    </div>
                    <p className="funsies">{body}</p>
            </div>
    )
}

