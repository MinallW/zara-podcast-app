'use client'

import CircularProgress from '@mui/joy/CircularProgress';
import { useAppSelector } from "@/redux/hooks";

export default function NavBarSpinner() {
    const loading = useAppSelector((state) => state.loadingReducer.loading);

    if (loading) {
        return (
            <CircularProgress color="neutral" />
        )
    } else {
        return (
            <CircularProgress color="neutral" value={100} />
        )
    }
}