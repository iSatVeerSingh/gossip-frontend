import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      const mq = window.matchMedia(query);
      setMatches(mq.matches);
      mq.addEventListener("change", () => {
        setMatches(mq.matches);
      });

      return () => {
        mq.removeEventListener("change", () => {
          setMatches(mq.matches);
        });
      };
    }
  }, [query]);

  return matches;
};
