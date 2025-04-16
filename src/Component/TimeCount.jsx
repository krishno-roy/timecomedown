import { useState, useEffect, useRef } from "react";
import moment from "moment-timezone";

const CountdownApp = () => {
  const [title, setTitle] = useState("New Timer");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [bgType, setBgType] = useState("gradient"); // 'gradient' or 'color'
  const [bgGradient, setBgGradient] = useState(
    "linear-gradient(to right, #ff512f, #dd2476)"
  );
  const [bgColor, setBgColor] = useState("#1e3a8a"); // default solid color
  const [date, setDate] = useState(""); // e.g., 2025-04-18
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [endTime, setEndTime] = useState(null);
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [fontFamily, setFontFamily] = useState("Comic Sans MS, cursive");

  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearTimeout(timerRef.current);
    }
    return () => clearTimeout(timerRef.current);
  }, [isRunning, timeLeft]);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return {
      hours: String(hrs).padStart(2, "0"),
      minutes: String(mins).padStart(2, "0"),
      seconds: String(secs).padStart(2, "0"),
    };
  };

  const handleStart = () => {
    const total = parseInt(hour) * 3600 + parseInt(minute) * 60;
    if (total > 0) {
      let now = moment().tz(timeZone);
      let end;

      if (date) {
        const [year, month, day] = date.split("-").map(Number);
        end = moment.tz(
          {
            year,
            month: month - 1,
            day,
            hour: now.hour(),
            minute: now.minute(),
            second: now.second(),
          },
          timeZone
        );
        end.add(parseInt(hour), "hours").add(parseInt(minute), "minutes");
      } else {
        end = now.clone().add(total, "seconds");
      }

      setEndTime(end);
      setTimeLeft(end.diff(now, "seconds"));
      setIsRunning(true);
    }
  };

  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setEndTime(null);
  };

  const formatted = formatTime(timeLeft);
  const allTimeZones = moment.tz.names();

  const fonts = [
    "Comic Sans MS, cursive",
    "Arial, sans-serif",
    "Georgia, serif",
    "Courier New, monospace",
    "Trebuchet MS, sans-serif",
    "Lucida Console, monospace",
  ];

  const backgroundStyle = {
    background: bgType === "gradient" ? bgGradient : bgColor,
    fontFamily: fontFamily,
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white p-6 w-full md:w-72 space-y-4">
        <h2 className="text-xl font-bold">Timer Settings</h2>

        <div>
          <label className="block text-sm mb-1">Title</label>
          <input
            className="w-full p-2 rounded text-white bg-gray-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Set Time</label>
          <div className="flex gap-2">
            <select
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="w-1/2 p-2 bg-gray-800 text-white rounded"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i}>{String(i).padStart(2, "0")}</option>
              ))}
            </select>
            <select
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="w-1/2 p-2 bg-gray-800 text-white rounded"
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i}>{String(i).padStart(2, "0")}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">End Date (optional)</label>
          <input
            type="date"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Time Zone</label>
          <select
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          >
            {allTimeZones.map((tz) => (
              <option key={tz}>{tz}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Font Style</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          >
            {fonts.map((font, idx) => (
              <option key={idx} value={font}>
                {font.split(",")[0]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Background Type</label>
          <div className="flex gap-2 items-center">
            <label className="flex items-center">
              <input
                type="radio"
                value="gradient"
                checked={bgType === "gradient"}
                onChange={() => setBgType("gradient")}
                className="mr-2"
              />
              Gradient
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="color"
                checked={bgType === "color"}
                onChange={() => setBgType("color")}
                className="mr-2"
              />
              Single Color
            </label>
          </div>
        </div>

        {bgType === "gradient" ? (
          <div>
            <label className="block text-sm mb-1">Gradient CSS</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={bgGradient}
              onChange={(e) => setBgGradient(e.target.value)}
              placeholder="linear-gradient(to right, #ff512f, #dd2476)"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm mb-1">Color Picker</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full p-2 rounded bg-gray-800"
            />
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex gap-2 pt-4">
          <button
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white w-full"
            onClick={handleStart}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white w-full"
            onClick={handleStop}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white w-full"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Countdown Display */}
      <div
        className="flex-1 flex flex-col justify-center items-center p-6 text-white"
        style={backgroundStyle}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>

        <div className="flex gap-4 text-center">
          {["hours", "minutes", "seconds"].map((unit, i) => (
            <div
              key={i}
              className="bg-black bg-opacity-30 px-6 py-4 rounded text-5xl md:text-6xl font-bold font-mono"
            >
              {formatted[unit]}
              <div className="text-sm mt-1">{unit}</div>
            </div>
          ))}
        </div>

        {/* End Time */}
        {endTime && (
          <div className="mt-6 text-center text-lg">
            Ends At:{" "}
            <span className="font-semibold">
              {endTime.format("dddd, MMMM D, YYYY h:mm:ss A")} ({timeZone})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownApp;
