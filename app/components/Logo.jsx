'use client'

import Link from "next/link";
import { toggle } from '@/redux/features/loadingSlice';
import { useAppDispatch } from "@/redux/hooks";

export default function Navbar() {
    const dispatch = useAppDispatch();

    return (
        <>
            <Link href={'/'} onClick={() => {
                dispatch(toggle())
            }}>
                Podcaster!
            </Link>
        </>
    );
}