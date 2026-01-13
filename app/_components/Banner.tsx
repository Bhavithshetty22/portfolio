'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="w-full h-[100svh] min-h-[530px] flex items-center justify-center relative px-8"
                ref={containerRef}
            >
                {/* Name in top center with bullet */}
                <div className="absolute top-12 sm:top-12 left-24 sm:left-27 md:left-32 lg:left-40 slide-up-and-fade flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-light text-foreground">
                        Bhavith Shetty
                    </h2>
                </div>

                {/* Main Title - Centered */}
                <div className="w-full text-left pl-4 sm:pl-8 md:pl-20 lg:pl-40">
                    <h1 className="slide-up-and-fade leading-[0.85] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                        <span className="block text-foreground">FRONTEND</span>
                        <span className="block text-purple-500">DEVELOPER</span>
                    </h1>
                </div>

                {/* "OPEN TO WORK" and Stats - bottom right */}
                <div className="absolute bottom-12 right-12 slide-up-and-fade text-right space-y-8">
                    {/* Open to work */}
                    <div className="flex items-start gap-3 justify-end">
                        <div>
                            <p className="text-base font-semibold text-foreground">
                                OPEN TO WORK
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Based in India
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-6">
                        <div>
                            <h5 className="text-4xl sm:text-5xl font-bold text-purple-500 mb-1">
                                7+
                            </h5>
                            <p className="text-sm text-muted-foreground">
                                Completed Projects
                            </p>
                        </div>
                        <div>
                            <h5 className="text-4xl sm:text-5xl font-bold text-purple-500 mb-1">
                                2K+
                            </h5>
                            <p className="text-sm text-muted-foreground">
                                Hours Worked
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;