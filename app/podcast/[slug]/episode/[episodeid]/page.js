"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { select, reset } from "@/redux/features/podcastSlice";

export default function EpisodeInternal() {
    const podcast = useAppSelector((state) => state.podcastReducer.podcast);
    console.log(podcast)
    const dispatch = useAppDispatch();

    return (
        <>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{podcast.title} {podcast.description} {podcast.author} fff</h4>
                <button onClick={() => dispatch(select({
                    title: 'tit',
                    description: 'des',
                    author: 'aut',
                    episodeURL: '',
                    artworkURL: ''
                }))}>select</button>

                <button
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </>
    )
}