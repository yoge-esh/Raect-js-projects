import axios from 'axios';
export const getData = () =>
{
    // return axios.get('https://jsonplaceholder.typicode.com/posts')
    return axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-01-05&sortBy=publishedAt&apiKey=5eb75999b74244e08698b74dfc1a1138')
}

export const article = () =>
{
    return axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5eb75999b74244e08698b74dfc1a1138')
}


export const Business = () =>
{
    return axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5eb75999b74244e08698b74dfc1a1138')
}

export const Public = () =>
{
    return axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=5eb75999b74244e08698b74dfc1a1138')
}