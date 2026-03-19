import PostPage from "../../post/[id]/page";
import { CloseModalHandler } from "@/components/CloseModalHandler";

export default async function PostPageIntercepted({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <CloseModalHandler title="Post Page">
            <PostPage params={Promise.resolve({ id })} />
        </CloseModalHandler>
    );
}