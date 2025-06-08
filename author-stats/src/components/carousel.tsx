"use client";

import AuthorBioWidget from "@/components/authorBioWidget";
import AuthorStats from "./authorStats";
import FriendsList from "./friendsList";
import ProjectCard from "@/components/projectCard";

export default function carousel() {
    return(
        <div>
            <div className="carousel w-full">
                <div id="bio" className="carousel-item w-full">
                    <AuthorBioWidget />
                </div>
                <div id="projects" className="carousel-item w-full">
                    <div className="carousel w-full">
                        {/* TODO: For each project in the user's list, link to it through the project cards */}

                        <div id="slide1" className="carousel-item relative w-full pl-[2.5em]">
                            <ProjectCard />
                            <div className="absolute left-3 right-12 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full pl-[2.5em]">
                            <ProjectCard />
                            <div className="absolute left-3 right-12 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full pl-[2.5em]">
                            <ProjectCard /> 
                            <div className="absolute left-3 right-12 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full pl-[2.5em]">
                            <ProjectCard />
                             <div className="absolute left-3 right-12 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="friends" className="carousel-item w-full">
                    <FriendsList />
                </div>
                <div id="wordsWritten" className="carousel-item w-[40em] flex items-center">
                    <AuthorStats />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#bio" className="btn btn-xs">Biography</a>
                <a href="#projects" className="btn btn-xs">Projects</a>
                <a href="#friends" className="btn btn-xs">Friends</a>
                <a href="#wordsWritten" className="btn btn-xs">Statistics</a>
            </div>
        </div>
    );
}