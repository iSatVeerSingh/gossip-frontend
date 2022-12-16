import { useMediaQuery } from "./useMediaQuery";

export const useIsDesktop = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)");

  return isDesktop;
};
