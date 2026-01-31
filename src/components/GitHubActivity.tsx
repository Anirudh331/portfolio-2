import cursorIcon from '@/assets/cursor.webp';
import { useMemo } from 'react';

const GitHubActivity = () => {
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  
  const contributions = useMemo(() => {
    const data: number[][] = [];
    for (let week = 0; week < 52; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < 7; day++) {
        weekData.push(Math.floor(Math.random() * 5));
      }
      data.push(weekData);
    }
    return data;
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <p className="section-label">Featured</p>
      <h2 className="section-title">GitHub Activity</h2>

      <div className="flex items-center gap-4 mb-4">
        <p className="text-sm text-muted-foreground">
          Total: <span className="font-semibold text-foreground">1,904</span> contributions
        </p>
        <div className="flex items-center gap-2 px-2 py-1 bg-muted rounded-full text-xs">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span>Offline</span>
          <img src={cursorIcon} alt="Cursor" className="w-4 h-4" />
          <span>Yesterday worked</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span>Offline</span>
        <img src={cursorIcon} alt="Cursor" className="w-4 h-4" />
        <span>Yesterday</span>
        <span className="font-bold text-foreground ml-2">3h 26m</span>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1 mb-1">
          {months.map((month) => (
            <span key={month} className="text-xs text-muted-foreground w-10 text-center">
              {month}
            </span>
          ))}
        </div>
        <div className="flex gap-0.5">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-0.5">
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`contribution-cell contribution-${level}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
