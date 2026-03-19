// src/components/post/PostActions.tsx
"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal";
import { editPostAction } from "@/app/actions/editPostAction";
import { deletePostAction } from "@/app/actions/deletePostAction";
import { Post as PostType } from "@/lib/store";

export function PostActions({ postId, post }: { postId: string, post: PostType }) {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <>
            <div className="flex justify-end gap-2">
                <button onClick={() => setShowModal(true)}>Edit</button>
                <button className="secondary-button" onClick={() => setShowDeleteModal(true)}>Delete</button>
            </div>

            {showModal && (
                <Modal closeModal={() => setShowModal(false)} title="Edit Post">
                    <form
                        action={async (formData: FormData) => {
                            await editPostAction(postId, formData);
                            setShowModal(false);
                        }}
                    >
                        <input type="text" name="title" placeholder="Title" defaultValue={post.title} />
                        <input type="text" name="image" placeholder="Image" defaultValue={post.image} />
                        <textarea name="content" placeholder="Content" defaultValue={post.content} />
                        <button className="primary-button" type="submit">Save</button>
                    </form>
                </Modal>
            )}

            {showDeleteModal && (
                <Modal closeModal={() => setShowDeleteModal(false)} title="Delete Post">
                    <p>Are you sure you want to delete this post?</p>
                    <div className="flex justify-end gap-2">
                        <button
                            className="secondary-button"
                            onClick={async () => {
                                await deletePostAction(postId);
                                setShowDeleteModal(false);
                            }}
                        >
                            Delete
                        </button>
                        <button className="secondary-button" onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
}