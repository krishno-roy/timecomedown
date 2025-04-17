import { useState, useEffect, useRef } from "react";
import moment from "moment-timezone";

const CountdownApp = () => {
  const [title, setTitle] = useState("My Timer");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [date, setDate] = useState("");
  const [bgColor, setBgColor] = useState("#1e3a8a");
  const [bgType, setBgType] = useState("gradient");
  const [bgGradient, setBgGradient] = useState(
    "linear-gradient(to right, #ff512f, #dd2476)"
  );
  const [fontFamily, setFontFamily] = useState("Comic Sans MS, cursive");
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [endTime, setEndTime] = useState(null);
  const timerRef = useRef(null);

  // Load settings from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedTitle = params.get("title");
    const sharedHour = params.get("hour");
    const sharedMinute = params.get("minute");
    const sharedDate = params.get("date");
    const sharedBgColor = params.get("bgColor");
    const sharedBgType = params.get("bgType");
    const sharedBgGradient = params.get("bgGradient");
    const sharedFontFamily = params.get("fontFamily");
    const sharedTimeZone = params.get("timeZone");

    if (sharedTitle) setTitle(sharedTitle);
    if (sharedHour) setHour(sharedHour);
    if (sharedMinute) setMinute(sharedMinute);
    if (sharedDate) setDate(sharedDate);
    if (sharedBgColor) setBgColor(sharedBgColor);
    if (sharedBgType) setBgType(sharedBgType);
    if (sharedBgGradient) setBgGradient(sharedBgGradient);
    if (sharedFontFamily) setFontFamily(sharedFontFamily);
    if (sharedTimeZone) setTimeZone(sharedTimeZone);

    // Start countdown if shared
    if (sharedHour && sharedMinute) {
      const now = moment().tz(sharedTimeZone || timeZone);
      let end;

      if (sharedDate) {
        const [year, month, day] = sharedDate.split("-").map(Number);
        end = moment.tz(
          { year, month: month - 1, day },
          sharedTimeZone || timeZone
        );
        end
          .add(parseInt(sharedHour), "hours")
          .add(parseInt(sharedMinute), "minutes");
      } else {
        end = now
          .clone()
          .add(
            parseInt(sharedHour) * 3600 + parseInt(sharedMinute) * 60,
            "seconds"
          );
      }

      setEndTime(end);
      setTimeLeft(end.diff(now, "seconds"));
      setIsRunning(true);
    }
  }, []);

  // Countdown logic
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

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return { hrs, mins, secs };
  };

  const handleStart = () => {
    const totalSeconds = parseInt(hour) * 3600 + parseInt(minute) * 60;
    const now = moment().tz(timeZone);
    let end;

    if (date) {
      const [year, month, day] = date.split("-").map(Number);
      end = moment.tz({ year, month: month - 1, day }, timeZone);
      end.add(parseInt(hour), "hours").add(parseInt(minute), "minutes");
    } else {
      end = now.clone().add(totalSeconds, "seconds");
    }

    setEndTime(end);
    setTimeLeft(end.diff(now, "seconds"));
    setIsRunning(true);
  };

  const handleShare = () => {
    const params = new URLSearchParams({
      title,
      hour,
      minute,
      date,
      bgColor,
      bgType,
      bgGradient,
      fontFamily,
      timeZone,
    });

    const shareUrl = `${window.location.origin}${
      window.location.pathname
    }?${params.toString()}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("লিংক কপি হয়েছে! এখন আপনি এটি শেয়ার করতে পারেন।");
    });
  };

  const formatted = formatTime(timeLeft);
  const allTimeZones = moment.tz.names();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Settings Panel */}
      <div className="bg-gray-900 text-white p-6 w-full md:w-80 space-y-4">
        <h2 className="text-xl font-bold">Countdown Settings</h2>

        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>

        <div>
          <label>Hour / Minute</label>
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
          <label>Date (optional)</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          />
        </div>

        <div>
          <label>Time Zone</label>
          <select
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          >
            {allTimeZones.map((zone) => (
              <option key={zone}>{zone}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Font</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          >
            <option value="Comic Sans MS, cursive">Comic Sans</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
          </select>
        </div>

        <div>
          <label>Background Type</label>
          <div className="flex gap-2">
            <label>
              <input
                type="radio"
                checked={bgType === "gradient"}
                onChange={() => setBgType("gradient")}
              />{" "}
              Gradient
            </label>
            <label>
              <input
                type="radio"
                checked={bgType === "color"}
                onChange={() => setBgType("color")}
              />{" "}
              Color
            </label>
          </div>
        </div>

        {bgType === "color" ? (
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full"
          />
        ) : (
          <input
            value={bgGradient}
            onChange={(e) => setBgGradient(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          />
        )}

        <button
          onClick={handleStart}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full"
        >
          Start Timer
        </button>

        <button
          onClick={handleShare}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full"
        >
          Share Link
        </button>
      </div>

      {/* Countdown Display */}
      <div
        className="flex-1 flex flex-col justify-center items-center text-white text-center"
        style={{
          background: bgType === "color" ? bgColor : bgGradient,
          fontFamily: fontFamily,
          transition: "all 0.3s",
        }}
      >
        <h1 className="text-4xl md:text-6xl mb-6 font-bold">{title}</h1>
        <div className="flex gap-4 text-6xl font-mono bg-black bg-opacity-30 p-6 rounded">
          <div>{formatted.hrs}</div>
          <div>:</div>
          <div>{formatted.mins}</div>
          <div>:</div>
          <div>{formatted.secs}</div>
        </div>

        {endTime && (
          <p className="mt-4 text-lg">
            Ends at: {endTime.format("YYYY-MM-DD HH:mm:ss")} ({timeZone})
          </p>
        )}
      </div>
    </div>
  );
};

export default CountdownApp;
