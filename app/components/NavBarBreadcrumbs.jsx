'use client'

import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import { usePathname } from 'next/navigation'

export default function NavBarBreadcrumbs() {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs">
            <Typography>Amy</Typography>
            {['Characters', 'Futurama', 'TV Shows', 'Home'].map((item) => (
                <Link key={item} color="neutral" href="#separators">
                    {item}
                </Link>
            ))}
        </Breadcrumbs>
    );
}

