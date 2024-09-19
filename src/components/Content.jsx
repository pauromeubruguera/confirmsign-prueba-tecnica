

export const Content = (props) => {
    const { hilo } = props

    const content = hilo.content

    return (
        <div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
    )
}