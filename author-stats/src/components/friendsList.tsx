
export default function friendsList() {
    return(
        <div>
            <div className="overflow-x-auto">
                <table className="table w-[40rem] mx-auto">
                    <tbody>
                    {/* row 1 */}
                    <tr className="hover:animate-bounce">
                        <td>
                        <div className="flex items-center gap-3 pl-10">
                            <div className="avatar">
                            <div className="mask mask-circle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                alt="Avatar Tailwind CSS Component"
                                />
                            </div>
                            </div>
                            <div className="pl-10">
                                <div className="font-bold text-[var(--amethyst)]">Username</div>
                                <div className="text-sm text-[var(--amethyst)] opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td className="flex inline-flex gap-3 mr-20">
                            <span className="badge badge-ghost badge-sm mt-2">1 project</span>
                            <span className="badge badge-ghost badge-sm mt-2">5,000 words written</span>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover:animate-bounce">
                        <td>
                        <div className="flex items-center gap-3 pl-10">
                            <div className="avatar">
                            <div className="mask mask-circle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div className="pl-10">
                                <div className="font-bold text-[var(--amethyst)]">Username</div>
                                <div className="text-sm text-[var(--amethyst)] opacity-50">China</div>
                            </div>
                        </div>
                        </td>
                        <td className="flex inline-flex gap-3 mr-20">
                            <span className="badge badge-ghost badge-sm mt-2">3 projects</span>
                            <span className="badge badge-ghost badge-sm mt-2">55,000 words written</span>
                        </td>
                    </tr>
                   
                    </tbody>
                </table>
                </div>
        </div>
    );
}