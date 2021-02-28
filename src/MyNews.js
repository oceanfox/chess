import { useState } from 'react'
const NewsAPI = require('newsapi');

export const MyNews = () => {
    const [news, setNews] = useState({})
    const newsapi = new NewsAPI('2e2329ad79f74c468b82cd4de58c6b48');
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
    }).then(response => {
        console.log('response .....__-',response);
        setNews(response)
    });
    
    
    
    return (
        <div>
            {JSON.stringify(news, null, 2)}
        </div>
    )
    
    
}
