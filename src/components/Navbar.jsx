import { useState } from "react"


export const Navbar = (props) => {
    const { hilo } = props
    const [history, setHistory] = useState(hilo.history[0].status)
    return (
        <nav>
            <div>
                <strong>
                    cfscode:
                </strong>
                {hilo.cfscode}
            </div>
            <div>
                <strong>
                    Sender:
                </strong>
                {hilo.sender.user}
            </div>
            <div>
                <strong>
                    Adress:
                </strong>
                {hilo.recipient.address}
            </div>
            <div>
                <strong>
                    Status:
                </strong>
                <select value={history}>
                    {hilo.history.map((item, key) => (
                        <option disabled key={key} value={item.status}>
                            {item.status}
                        </option>
                    ))}
                </select>

            </div>
        </nav>
    )
}