
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type Album = {
    userId: number;
    id: number; 
    title: string;
}

export async function getUserProfile(userId: string){
    await new Promise(resolve => setTimeout(resolve, 2000)); 
   return (await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)).json()
           
}

export async function getUserAlbums(userId: string){
    await new Promise(resolve => setTimeout(resolve, 2000));
return (await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)).json()
}

