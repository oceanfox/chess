import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'


export function News({url}) {
    const [response, setResponse] = useState(null);
    const {data, error, status} = useFetch(url)
    
    useEffect(() => {
        if (status === 'fetched')
            setResponse(data);
    }, [status])
    
    
   if (error){
       return <div>{'Sorry, could not fetch news'}</div>
   }
    
    if (status === 'fetching') {
        return <div>{'Loading from api'}</div>
    }
    
    return (
        <div>
            {response  && response.hits && response.hits.map((item, key) => {
                return (
                    <ul key={key}>
                        <h5>{item.title}</h5>
                        <a href={item.url}>{item.title}</a>
                        <article >{item.description}</article>
                    </ul>
                )
            })}
        </div>
    )
}
