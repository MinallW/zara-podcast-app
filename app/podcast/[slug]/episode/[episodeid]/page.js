"use client"

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import { useEffect } from 'react';
import { toggle } from '@/redux/features/loadingSlice';
import { useAppDispatch } from "@/redux/hooks";

export default function EpisodeInternal() {
    const dispatch = useAppDispatch();
    const localStorageItem = localStorage.getItem("podcastEpisode")
    const {
        title,
        description,
        author,
        artworkURL,
        episodeName,
        episodeURL,
        episodeDescription
    } = JSON.parse(localStorageItem)

    // The page is loaded quite fast though
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(toggle());
        }, 500); // Delay of 0.5 seconds (500 milliseconds)

        return () => {
            clearTimeout(timeoutId); // Clear the timeout if the component unmounts or the effect re-runs
        };

    }, [dispatch]);

    return (
        <>
            <div className='flex items-center justify-evenly m-20'>
                <Card variant="outlined" sx={{ width: 400 }}>
                    <div className='flex justify-center'>
                        <img
                            src={artworkURL}
                            loading="lazy"
                            alt=""
                            height={200}
                            width={300}
                        />
                    </div>

                    <CardContent>
                        <Typography fontSize="lg" fontWeight="lg">
                            {title}
                        </Typography>
                        <Typography fontSize="sm" fontWeight={'sm'}>
                            by {author}
                        </Typography>
                        <Divider sx={{ m: 2 }} />
                        <Typography fontSize="lg" >
                            Description:
                        </Typography>
                        <Typography fontSize="sm" >
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
                {/*  */}
                <Card sx={{ maxWidth: 700 }}>
                    <Typography
                        color="neutral"
                        level="h4"
                        variant="outlined"
                    >{episodeName}</Typography>
                    <audio controls>
                        <source src={episodeURL} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <Typography>{episodeDescription}</Typography>
                </Card>
            </div>
        </>
    )
}