type TableTypes = {
    progLog?: boolean;
    dailyLog?: boolean;
    overallProgGoals?: boolean;
};

export default function progressTable({progLog, dailyLog, overallProgGoals}: TableTypes) {
    return(
        <div>
            {
                progLog ? (
                    <table className="rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] border-separate">
                        <tbody>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    mmm dd, yyyy
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-2 hover:text-[var(--tropical_indigo)]">
                                    xxx words
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5 rounded-r-[1em]">
                                    <img onMouseOver={(e) => e.currentTarget.src = "/trash-hover.svg"}
                                        onMouseOut={(e) => e.currentTarget.src = "/trash.svg"}
                                        src="/trash.svg"
                                        alt="Trash"
                                        className="w-[1.5em]"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2">
                                    mmm dd, yyyy
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-2 hover:text-[var(--tropical_indigo)]">
                                    xxx words
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5">
                                    <img onMouseOver={(e) => e.currentTarget.src = "/trash-hover.svg"}
                                        onMouseOut={(e) => e.currentTarget.src = "/trash.svg"}
                                        src="/trash.svg"
                                        alt="Trash"
                                        className="w-[1.5em]"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pr-2 pb-2">
                                    mmm dd, yyyy
                                </td>
                                <td className="pl-2 pt-2 pr-2 pb-2 hover:text-[var(--tropical_indigo)]">
                                    xxx words
                                </td>
                                <td className="pl-2 pt-2 pr-5 pb-2">
                                    <img onMouseOver={(e) => e.currentTarget.src = "/trash-hover.svg"}
                                        onMouseOut={(e) => e.currentTarget.src = "/trash.svg"}
                                        src="/trash.svg"
                                        alt="Trash"
                                        className="w-[1.5em]"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div></div>
                )
            }
            {
                dailyLog ? (
                    <table className="rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] border-separate">
                        <tbody>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    mmm dd, yyyy
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5 hover:text-[var(--tropical_indigo)]">
                                    xxx words
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2">
                                    mmm dd, yyyy
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5 hover:text-[var(--tropical_indigo)]">
                                    xxx words
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pr-2 pb-2">
                                    mmm dd, yyyy
                                </td>
                                <td className="pl-2 pt-2 pr-5 pb-2 hover:text-[var(--tropical_indigo)]">
                                    xxx words
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div></div>
                )
            }
            {
                overallProgGoals ? (
                    <table className="rounded-[1em] text-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] border-separate">
                        <thead>
                            <tr>
                                <th className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    Date
                                </th>
                                <th className="pl-2 pt-2 pr-2 pb-2">
                                    Total Count
                                </th>
                                <th className="pl-2 pt-2 pb-2 pr-5">
                                    Goal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    mm/dd/yyyy
                                </td>
                                <td className="pl-2 pt-2 pr-2 pb-2 hover:text-[var(--tropical_indigo)]">
                                    123
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5">
                                    500
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    mm/dd/yyyy
                                </td>
                                <td className="pl-2 pt-2 pr-2 pb-2 hover:text-[var(--tropical_indigo)]">
                                    123
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5">
                                    500
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <div></div>
                )
            }
        </div>
    );
}