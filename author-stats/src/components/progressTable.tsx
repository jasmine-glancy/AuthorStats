import { useState } from "react";

type TableTypes = {
    progLog?: boolean;
    dailyLog?: boolean;
    overallProgGoals?: boolean;
};

type ProgressTableTypes = {
    id: number;
    date: Date;
    wordCount: number;
}

export default function progressTable({progLog, dailyLog, overallProgGoals}: TableTypes) {
    const dummyDate1: Date = new Date("2025-5-23")
    const dummyDate2: Date = new Date("2025-5-24")

    const [progressTable, setProgressTable] = useState<ProgressTableTypes[]>([
        { id: 0, date: dummyDate1, wordCount: 500 },
        { id: 1, date: dummyDate1, wordCount: 250 },
        { id: 2, date: dummyDate2, wordCount: 1000 },
    ]);

    
    const removeRow = (id: number) => {
        const updatedProgressTable = progressTable.filter((row) => row.id !== id);
        setProgressTable(updatedProgressTable);
    };

    return(
        <div>
            {
                progLog ? (
                    <table className="rounded-[1em] text-center border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] border-separate">
                        <caption className="font-bold text-[var(--amethyst)] p-2">Progress Updates</caption>
                        <thead>
                                <tr>
                                    <th className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                        Date
                                    </th>
                                    <th className="pl-2 pt-2 pr-2 pb-2">
                                        Session Count
                                    </th>
                                </tr>
                            </thead>
                        <tbody>
                            {
                                progressTable.map((row) => (
                                    <tr key={row.id}>
                                        <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                            {row.date.toDateString()}
                                        </td>
                                        <td className="pl-2 pt-2 pb-2 pr-2 hover:text-[var(--tropical_indigo)]">
                                            {row.wordCount} words
                                        </td>
                                        <td className="pl-2 pt-2 pb-2 pr-5 rounded-r-[1em]">
                                            <img onMouseOver={(e) => e.currentTarget.src = "/trash-hover.svg"}
                                                onMouseOut={(e) => e.currentTarget.src = "/trash.svg"}
                                                src="/trash.svg"
                                                alt="Trash"
                                                className="w-[1.5em]" 
                                                onClick={ () => removeRow(row.id) }/>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <div></div>
                )
            }
            {
                dailyLog ? (
                    <table className="rounded-[1em] border-1 text-center border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] border-separate">
                        <caption className="font-bold text-[var(--amethyst)] p-2">Daily Progress</caption>
                        <thead>
                                <tr>
                                    <th className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                        Date
                                    </th>
                                    <th className="pl-2 pt-2 pr-2 pb-2">
                                        Daily Total
                                    </th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    May 10, 2025
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5 hover:text-[var(--tropical_indigo)]">
                                    250 words
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2">
                                    May 11, 2025
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5 hover:text-[var(--tropical_indigo)]">
                                    750 words
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pr-2 pb-2">
                                    May 12, 2025
                                </td>
                                <td className="pl-2 pt-2 pr-5 pb-2 hover:text-[var(--tropical_indigo)]">
                                    1,000 words
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
                        <caption className="font-bold text-[var(--amethyst)] p-2">Goal Progress</caption>
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
                                    5/10/2025
                                </td>
                                <td className="pl-2 pt-2 pr-2 pb-2 hover:text-[var(--tropical_indigo)]">
                                    250
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5">
                                    1,000
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    5/11/2025
                                </td>
                                <td className="pl-2 pt-2 pr-2 pb-2 hover:text-[var(--tropical_indigo)]">
                                    1,000
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5">
                                    1,000
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-5 pt-2 pb-2 pr-2 rounded-l-[1em]">
                                    5/12/2025
                                </td>
                                <td className="pl-2 pt-2 pr-2 pb-2 hover:text-[var(--tropical_indigo)]">
                                    2,000
                                </td>
                                <td className="pl-2 pt-2 pb-2 pr-5">
                                    5,000
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