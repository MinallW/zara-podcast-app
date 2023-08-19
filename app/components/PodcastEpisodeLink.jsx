"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { select } from "@/redux/features/podcastSlice";
import { Link } from "@mui/material";

export default function EpisodeLink({ link, podcastId, podcastEpisodeId, episodeURL, index }) {
    const dispatch = useAppDispatch();
    const podcast = useAppSelector((state) => state.podcastReducer.podcast);

    return (
        <>
            <Link
                href={`/podcast/${podcastId}/episode/${podcastEpisodeId}`}
                className='text-blue-600'
                onClick={() => {
                    const hydratedPodcast = { ...podcast, episodeURL }
                    localStorage.setItem("podcastEpisode", JSON.stringify(hydratedPodcast))
                }}
            >
                {link}
            </Link>
        </>
    )
}