import { useState, useEffect, useRef } from "react";
import moment from "moment-timezone";

const CountdownApp = () => {
  const [title, setTitle] = useState("My Timer");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [date, setDate] = useState("");
  const [bgType, setBgType] = useState("gradient");
  const [bgColor, setBgColor] = useState("#1e3a8a");
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
  const [menuOpen, setMenuOpen] = useState(true);
  const timerRef = useRef(null);
  const [shareLink, setShareLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const [timerBgColor, setTimerBgColor] = useState("#00000080");
  const [timerTextColor, setTimerTextColor] = useState("#ffffff");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shortCode = params.get('c');
    
    if (shortCode) {
      try {
        const decoded = atob(shortCode);
        const settings = JSON.parse(decoded);
        
        if (settings.h) setHour(settings.h.padStart(2, "0"));
        if (settings.m) setMinute(settings.m.padStart(2, "0"));
        if (settings.d) setDate(settings.d);
        if (settings.tz) setTimeZone(settings.tz);
        if (settings.tt) setTitle(settings.tt);
        if (settings.bg) setBgType(settings.bg);
        if (settings.bc) setBgColor(settings.bc);
        if (settings.grd) setBgGradient(settings.grd);
        if (settings.tbc) setTimerBgColor(settings.tbc);
        if (settings.ttc) setTimerTextColor(settings.ttc);

        if (settings.as) {
          const hours = settings.h ? parseInt(settings.h) : 0;
          const minutes = settings.m ? parseInt(settings.m) : 0;
          const totalSeconds = hours * 3600 + minutes * 60;
          startTimer(totalSeconds);
          setMenuOpen(false);
        }
      } catch (e) {
        console.error("Error decoding share link:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft <= 0 && isRunning) {
      setIsRunning(false);
      clearTimeout(timerRef.current);
    }
    return () => clearTimeout(timerRef.current);
  }, [isRunning, timeLeft]);

const formatTime = (seconds) => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return { hrs, mins, secs }; // Fixed: removed space between m and ins
};

  const startTimer = (totalSeconds) => {
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
    setTimeLeft(Math.max(0, end.diff(now, "seconds")));
    setIsRunning(true);
  };

  const handleStart = () => {
    const totalSeconds = parseInt(hour) * 3600 + parseInt(minute) * 60;
    startTimer(totalSeconds);
    generateShareLink();
  };

  const generateShareLink = () => {
    const settings = {
      h: hour,
      m: minute,
      tz: timeZone,
      tt: title,
      as: true,
      bg: bgType,
      bc: bgColor,
      grd: bgGradient,
      tbc: timerBgColor,
      ttc: timerTextColor
    };
    
    if (date) settings.d = date;
    
    const shortCode = btoa(JSON.stringify(settings));
    const shareableUrl = `${window.location.origin}${window.location.pathname}?c=${shortCode}`;
    setShareLink(shareableUrl);
    setIsCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleFixedTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    setHour(String(hrs).padStart(2, "0"));
    setMinute(String(mins).padStart(2, "0"));
  };

  const fixedColors = [
    { name: "Green", value: "#22c55e" },
    { name: "Yellow", value: "#eab308" },
    { name: "Red", value: "#ef4444" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#8b5cf6" },
  ];

  const fixedGradients = [
    { name: "Sunset", value: "linear-gradient(to right, #ff7e5f, #feb47b)" },
    { name: "Ocean", value: "linear-gradient(to right, #00c6ff, #0072ff)" },
    { name: "Mojito", value: "linear-gradient(to right, #1d976c, #93f9b9)" },
    { name: "Fire", value: "linear-gradient(to right, #f83600, #f9d423)" },
    {
      name: "Purple Bliss",
      value: "linear-gradient(to right, #360033, #0b8793)",
    },
  ];

  const formatted = formatTime(timeLeft);
  const allTimeZones = moment.tz.names();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="absolute top-4 left-4 text-white text-3xl bg-gray-800 p-3 rounded z-20"
        >
          ☰
        </button>
      )}

      {menuOpen && (
        <div className="fixed top-0 left-0 w-80 bg-gray-900 text-white p-6 h-full overflow-y-auto space-y-4 z-30">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✖
          </button>

          <h2 className="text-xl font-bold mt-10">Customize Timer</h2>

          <div>
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="w-1/2 p-2 rounded bg-gray-800 text-white"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="w-1/2 p-2 rounded bg-gray-800 text-white"
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Date (optional)</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div>
            <label>Time Zone</label>
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white"
            >
              {allTimeZones.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Quick Set Time</label>
            <select
              onChange={(e) => handleFixedTime(Number(e.target.value))}
              className="md:w-full w[230px] px-12 p-2 rounded bg-gray-800 text-white"
            >
              <option value="">Select</option>
              <option value={180}>3 Minutes</option>
              <option value={300}>5 Minutes</option>
              <option value={420}>7 Minutes</option>
              <option value={600}>10 Minutes</option>
              <option value={1800}>30 Minutes</option>
              <option value={3600}>1 Hour</option>
            </select>
          </div>

          <div>
            <label>Background Type</label>
            <div className="flex gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={bgType === "gradient"}
                  onChange={() => setBgType("gradient")}
                  className="mr-2"
                />
                Gradient
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={bgType === "color"}
                  onChange={() => setBgType("color")}
                  className="mr-2"
                />
                Color
              </label>
            </div>
          </div>

          {bgType === "color" ? (
            <>
              <div className="flex flex-wrap gap-2 mt-2">
                {fixedColors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setBgColor(c.value)}
                    style={{
                      backgroundColor: c.value,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    title={c.name}
                  ></button>
                ))}
              </div>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 mt-2"
              />
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mt-2">
                {fixedGradients.map((g) => (
                  <button
                    key={g.name}
                    onClick={() => setBgGradient(g.value)}
                    className="p-2 rounded w-full text-left"
                    style={{ background: g.value }}
                  >
                    {g.name}
                  </button>
                ))}
              </div>
            </>
          )}

          <div>
            <label className="block mt-4">Timer Text Color</label>
            <input
              type="color"
              value={timerTextColor}
              onChange={(e) => setTimerTextColor(e.target.value)}
              className="w-full h-10"
            />
          </div>
          <div>
            <label className="block mt-2">Timer Background Color</label>
            <input
              type="color"
              value={timerBgColor}
              onChange={(e) => setTimerBgColor(e.target.value)}
              className="w-full h-10"
            />
          </div>

          <button
            onClick={handleStart}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full mt-6"
          >
            Start Timer
          </button>

          {shareLink && (
            <div className="mt-4">
              <p>Share this link:</p>
              <div className="flex gap-2 mt-2">
                <input
                  readOnly
                  value={shareLink}
                  className="flex-1 p-2 bg-gray-700 rounded text-sm"
                  onClick={(e) => e.target.select()}
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded whitespace-nowrap"
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div
        className={`flex-1 flex flex-col justify-center items-center text-center transition-all duration-500 ${
          menuOpen ? "ml-80" : "ml-0"
        }`}
        style={{
          background: bgType === "color" ? bgColor : bgGradient,
          fontFamily: fontFamily,
          minHeight: "calc(100vh - 16px)",
          padding: menuOpen ? "0 2rem" : "0",
        }}
      >
        <h1
          className={`font-bold ${
            menuOpen ? "text-4xl" : "text-7xl"
          } mb-8 transition-all duration-500`}
          style={{ color: timerTextColor }}
        >
          {title}
        </h1>

        <div
          className={`flex gap-6 font-mono p-10 rounded-lg transition-all duration-500 ${
            menuOpen ? "scale-90" : "scale-100"
          }`}
          style={{
            backgroundColor: timerBgColor,
            color: timerTextColor,
            fontSize: menuOpen ? "3rem" : "6rem",
          }}
        >
          <div>{formatted.hrs}</div>
          <div>:</div>
          <div>{formatted.mins}</div>
          <div>:</div>
          <div>{formatted.secs}</div>
        </div>

        {endTime && (
          <p className="mt-6 text-lg" style={{ color: timerTextColor }}>
            Ends at: {endTime.format("YYYY-MM-DD HH:mm:ss")} ({timeZone})
          </p>
        )}

        {timeLeft <= 0 && isRunning && (
          <p className="mt-6 text-4xl font-bold" style={{ color: timerTextColor }}>
            Time's Up!
          </p>
        )}
      </div>
    </div>
  );
};

export default CountdownApp;