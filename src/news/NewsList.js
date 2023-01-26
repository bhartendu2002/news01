import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItems from './NewsItems'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-12-26&sortBy=publishedAt&apiKey=a8b7f2b863aa4013ab440fc0236cf4b2')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    },[])

    return (
        <div>
            {articles.map(article =>{
                return(
                    <NewsItems 
                    title={article.title}
                    descriptiom = {article.descriptiom}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList
