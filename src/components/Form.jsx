import { usePostThread } from "../api/usePostThread"


export const Form = (props) => {

    const { hilo } = props
    const { sendPostRequest } = usePostThread()
    const handleSubmit = (e) => {
        e.preventDefault();
        sendPostRequest(hilo)
    }

    return (
        <div className={hilo.closed ? "formContainer closed" : "formContainer active"}>
            <h2>{hilo.agreement.forms[0].title}</h2>
            <form>
                {hilo.agreement.forms[0].questions.map((question, key) => (
                    <div key={key}>
                        {question.type === "CHECK" && (
                            <>
                                <label>{question.label}: </label>
                                {question.options.map((option, key) => (
                                    <div key={key}>
                                        <label htmlFor={option.label}> {option.label}: </label>
                                        <input disabled={hilo.closed} type="checkbox" key={key} value={option.label} />
                                    </div>
                                ))}

                            </>
                        )}
                        {question.type === "TEXT" && (
                            <>
                                <input disabled={hilo.closed} type="text" maxLength={question.options[0].input.max} minLength={question.options[0].input.min} defaultValue={question.options[0].label} />
                            </>
                        )}
                    </div>
                ))}
                <div className='buttonContainer'>
                    {!hilo.closed ?
                        <button onClick={handleSubmit}>{hilo.agreement.accept_button_text}</button>
                        :
                        <button disabled>Hilo cerrado</button>
                    }
                </div>
            </form>
        </div>
    )
}