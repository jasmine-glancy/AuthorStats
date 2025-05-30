
export default function profilePicture () {
    return(
        <div>
            {/* If the user is offline, show avatar-offline */}
            <div className="avatar avatar-online">
                <div className="w-[10em] rounded-full border-6 border-double border-[var(--tropical_indigo)]">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
        </div>
    );
}