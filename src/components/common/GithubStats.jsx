import GitHubCalendar from 'react-github-calendar';
import { useState } from 'react';

export default function GithubStats({
    username = "abdulrahemfaqih",
    colorScheme = 'light',
    fontSize = 14,
    blockSize = 15,
    blockMargin = 2
}) {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, i) => startYear + i
    );

    return (
        <div className="w-full">
            <div className="flex flex-col space-y-6"> {/* Increased space between elements */}
                <div className="flex justify-end">
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                        className="px-4 py-2 text-base border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="overflow-x-auto py-4"> {/* Added vertical padding */}
                    <GitHubCalendar
                        username={username}
                        year={selectedYear}
                        colorScheme={colorScheme}
                        fontSize={fontSize}
                        blockSize={blockSize}
                        blockMargin={blockMargin}
                        showWeekdayLabels
                        style={{
                            width: '100%',
                            minHeight: '200px' // Memastikan tinggi minimum
                        }}
                    />
                </div>
            </div>
        </div>
    );
}