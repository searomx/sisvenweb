'use client';
import Link from 'next/link';
import React, { ComponentPropsWithRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { scrollElementToView } from //whereEver you keep the file


interface PropTypes extends ComponentPropsWithRef<typeof Link> {
    scrollToId: string
}



function ScrollToLink({ children, scrollToId, href, ...props }: PropTypes) {
    const searchParams = useSearchParams();


    const persistScrollFeature = () => {
        const urlScrollToId = searchParams.get("scrollToId");

        if (!urlScrollToId || scrollToId !== urlScrollToId) return; //let the Global Component Handle it

        scrollElementToView(urlScrollToId);
    }

    return (
        <Link {...props}
            onClick={persistScrollFeature}
            href={`${href}?scrollToId=${scrollToId}`}
            scroll={false} //very important, its disable nextJs scroll To top on navigation feature
        >
            {children}
        </Link>
    )
}

export default ScrollToLink;