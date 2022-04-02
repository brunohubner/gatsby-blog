import React from "react"
import PostItem from "../PostItem"

export default function Hit({
    hit: {
        background,
        title,
        date,
        description,
        category,
        timeToRead,
        fields: { slug }
    }
}) {
    return (
        <PostItem
            slug={slug}
            background={background}
            title={title}
            date={date}
            description={description}
            category={category}
            timeToRead={timeToRead}
        />
    )
}
