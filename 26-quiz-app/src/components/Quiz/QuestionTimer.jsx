import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setRemainingTime(timeout);
  }, [timeout]);

  useEffect(() => {
    console.log("Interval duoc goi");

    const intervalId = setInterval(() => {
      setRemainingTime((prev) => {
        const next = prev - 100;
        console.log("Remaining time:", Math.max(next, 0));

        if (next <= 0) {
          clearInterval(intervalId);
          onTimeout();
          return 0;
        }

        return next;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <progress max={timeout} value={Math.max(remainingTime, 0)} />
    </>
  );
}
