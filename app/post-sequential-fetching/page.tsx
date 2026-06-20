export default async function PostSequentialFetchingPage() {
    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/4');
    const postData = await postResponse.json();

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
    const userData = await userResponse.json();

    return (
        <div className='bg-blue-300 p-4 rounded-lg w-2xl shadow-2xl'>
            <h1>Post Sequential Fetching</h1>
            <h2>Post Details:</h2>
            <p><strong>Title:</strong> {postData.title}</p>
            <p> <strong>Body:</strong> {postData.body}</p>

            <h2>User Details:</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
        </div>
    );
}