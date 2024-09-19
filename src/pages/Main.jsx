

import { Content } from '../components/Content'
import { Form } from '../components/Form'
import { Navbar } from '../components/Navbar'
import { useGetThread } from '../api/GetThread'
import { useParams } from 'react-router-dom'

export const Main = () => {
    const { cskey, cfstoken } = useParams()
    const { result, loading, error } = useGetThread(cskey, cfstoken)
    return (
        <main>
            {error !== '' &&
                <div className='error'>
                    {error}
                </div>
            }
            {result !== null && !loading && (
                <>
                    <Navbar hilo={result} />
                    <Content hilo={result} />
                    <Form hilo={result} />
                </>
            )}
        </main>
    )
}