import React from "react";

export function CreateProduct() {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
            />
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}