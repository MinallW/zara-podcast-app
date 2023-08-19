"use client"

import { useAppSelector } from "@/redux/hooks";
import { Link } from "@mui/material";
import { toggle } from '@/redux/features/loadingSlice';
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

export default function EpisodeLink({ link, podcastId, podcastEpisodeId, episodeURL, episodeName, episodeDescription, index }) {
    const dispatch = useAppDispatch();
    const podcast = useAppSelector((state) => state.podcastReducer.podcast);

    useEffect(() => {
        if (index === 20) { // Last episode
            dispatch(toggle())
        }
    }, [])

    return (
        <>
            <Link
                href={`/podcast/${podcastId}/episode/${podcastEpisodeId}`}
                className='text-blue-600'
                onClick={() => {
                    const hydratedPodcast = {
                        ...podcast,
                        episodeName,
                        episodeDescription,
                        episodeURL
                    }
                    localStorage.setItem("podcastEpisode", JSON.stringify(hydratedPodcast))
                }}
            >
                {link}
            </Link>
        </>
    )
}