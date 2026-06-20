import { Album, getUserAlbums, getUserProfile } from "../page";

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    const postData = getUserProfile(id);
    const albumsData = getUserAlbums(id);

    const [post, albums] = await Promise.all([postData, albumsData]);

    return (
        <div className="grid grid-cols-2 gap-4 text-black">
            {/* Post Section */}
            <div className="bg-blue-100 p-4 rounded shadow">
                <h2 className="text-lg font-bold">Post</h2>
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.body}</p>
            </div>

            {/* Albums Section */}
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-bold mb-2">Albums</h2>
                <ul className="list-disc pl-5">
                    {albums.map((album: Album) => (
                        <li key={album.id}>{album.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

