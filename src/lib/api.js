import axios from 'axios';

const accessToken = '5|uscXyOCNCuZ6xdQuBj9BylkIeRDAXuEDsNwNqNrp'; // 노트북
// const accessToken = '1|xTy9Q4sBm8bSAmITwfbqbkWgMJF0rKlLFdlofgQd'; // 회사

export function getPosts()
{
    const response = axios.get('http://blog.test/api/v1/posts',{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return response;
}

export function getPost(params)
{
    const response = axios.get(`http://blog.test/api/v1/posts/${params}`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response;
}

export function createPost(params)
{
    const response = axios({
        method: 'post',
        url : 'http://blog.test/api/v1/posts/',
        data : params,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response;
}

export function updatePost(params)
{
    const response = axios({
        method: 'put',
        url : `http://blog.test/api/v1/posts/${params.id}`,
        data : params,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response;
}

export function deletePost()
{

}