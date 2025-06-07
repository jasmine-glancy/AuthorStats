import AuthorBioWidget from "@/components/authorBioWidget";
import FriendsList from "./friendsList";

export default function carousel() {
    return(
        <div>
            <div className="carousel w-full ">
                <div id="bio" className="carousel-item w-full max-h-[20em]">
                    <AuthorBioWidget />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <FriendsList />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#bio" className="btn btn-xs">Biography</a>
                <a href="#item2" className="btn btn-xs">Friends</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
}