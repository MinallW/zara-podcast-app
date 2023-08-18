"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { select } from "@/redux/features/podcastSlice";

export default function EpisodeInternal() {
    const podcast = useAppSelector((state) => state.podcastReducer.podcast);
    return (
        <>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{podcast.title} {podcast.description} {podcast.author} fff</h4>

                <button
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
            </div>
        </>
    )
}