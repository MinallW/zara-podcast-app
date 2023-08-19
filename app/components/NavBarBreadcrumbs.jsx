'use client'

import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import { usePathname } from 'next/navigation'
import { toggle } from '@/redux/features/loadingSlice';
import { useAppDispatch } from "@/redux/hooks";

export default function NavBarBreadcrumbs() {
    const pathname = usePathname()
    const dispatch = useAppDispatch();

    const breadcrumbsArray = pathname.split('/').splice(1)

    return (
        <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs">
            <Typography>
                <Link href={'/'} onClick={() => {
                    dispatch(toggle())
                }}>
                    Inicio
                </Link>
            </Typography>
            {breadcrumbsArray.map((item) => (
                <Link key={item} color="neutral" href="#separators">
                    {item}
                </Link>
            ))}
        </Breadcrumbs>
    );
}

