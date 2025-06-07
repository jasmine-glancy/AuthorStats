
export default function friendsList() {
    return(
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover:animate-bounce">
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-circle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                alt="Avatar Tailwind CSS Component"
                                />
                            </div>
                            </div>
                            <div>
                                <div className="font-bold text-[var(--amethyst)]">Username</div>
                                <div className="text-sm text-[var(--amethyst)] opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td className="flex inline-flex gap-3">
                            <span className="badge badge-ghost badge-sm">1 project</span>
                            <span className="badge badge-ghost badge-sm">5,000 words written</span>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover:animate-bounce">
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-circle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                                <div className="font-bold text-[var(--amethyst)]">Username</div>
                                <div className="text-sm text-[var(--amethyst)] opacity-50">China</div>
                            </div>
                        </div>
                        </td>
                        <td className="flex inline-flex gap-3">
                            <span className="badge badge-ghost badge-sm">3 projects</span>
                            <span className="badge badge-ghost badge-sm">55,000 words written</span>
                        </td>
                    </tr>
                   
                    </tbody>
                </table>
                </div>
        </div>
    );
}