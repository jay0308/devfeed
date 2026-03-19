import { createPostAction } from "@/app/actions/createPost";
import { requireAuth } from "@/lib/auth";

const CreatePostForm = async ({searchParams}: {searchParams: Promise<{ error?: string }>;}) => {
    await requireAuth();
    const params = await searchParams;
    const error = params.error;
    console.log(error);
    return (
        <div className="create-post-page py-16">
            <div className="page-container">
                <div className="create-post-container max-w-2xl mx-auto">
                    <h1 className="create-post-title">Create Post</h1>
                    {error && <p className="text-red-500">{error}</p>}
                    <form className="create-post-form" action={createPostAction} method="POST">
                        <input className="create-post-input" type="text" name="title" placeholder="Title" required />
                        <input className="create-post-input" type="text" name="image" placeholder="Image url" />
                        <textarea className="create-post-input" name="content" placeholder="Content" required />
                        <button className="create-post-button" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePostForm;