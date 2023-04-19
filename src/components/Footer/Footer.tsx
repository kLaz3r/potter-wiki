import {
    DiscordLogoIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
    const router = useRouter();
    let snapClass = "";
    if (router.pathname == "/") {
        snapClass = "snap-end";
    } else {
        snapClass = "";
    }
    return (
        <div
            className={`${snapClass} h-36 md:h-32 px-6 py-6 sm:px-12 md:px-16 lg:px-24 flex flex-col md:flex-row justify-center md:justify-between items-center`}
        >
            <div className="SocialButtons justify-center md:justify-start h-full flex flex-row gap-6 w-full pb-3 md:pb-0">
                <Link href="https://github.com/kLaz3r" className="text-[0px]">
                    GitHub
                    <GitHubLogoIcon className="h-full w-full text-light hover:text-accent active:text-accent transition-all" />
                </Link>
                <Link
                    className="text-[0px]"
                    href="https://discordapp.com/users/240478370620506112"
                >
                    Discord
                    <DiscordLogoIcon className="h-full w-full text-light hover:text-accent active:text-accent transition-all" />
                </Link>
                <Link
                    className="text-[0px]"
                    href="https://www.linkedin.com/in/stefan-nasturas-9bb019207/"
                >
                    LinkedIn
                    <LinkedInLogoIcon className="h-full w-full text-light hover:text-accent active:text-accent transition-all" />
                </Link>
                <Link
                    className="text-[0px]"
                    href="https://stefannasturas.live/"
                >
                    Personal Portfolio
                    <PersonIcon className="h-full w-full text-light hover:text-accent active:text-accent transition-all" />
                </Link>
            </div>

            <div className="CopyrightText">
                <p className="opacity-70 inline-block text-xs w-full text-center">
                    &copy; Copyright 2023, Stefan Nasturas. All rights reserved.{" "}
                </p>
            </div>
        </div>
    );
};

export default Footer;
