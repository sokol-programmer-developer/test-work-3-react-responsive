
import { useEffect, useState } from 'react';

interface MediaQueryHookProps {
  query: string;
}

const useMediaQuery = ({ query }: MediaQueryHookProps): boolean => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    function resize(mql: MediaQueryListEvent) {
      setMatches(mql.matches);
    }
    mql.addEventListener('change', resize);
    return () => {
      mql.removeEventListener('change', resize);
    };
  }, [query]);
  return matches;
};

export default useMediaQuery;