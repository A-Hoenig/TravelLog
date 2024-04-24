import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.has("lat") ? searchParams.get("lat") : undefined;
  const lng = searchParams.has("lng") ? searchParams.get("lng") : undefined;

  return [lat, lng];
}
