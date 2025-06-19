import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpToLine } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  const onScroll = () => {
    setShow(window.scrollY > 200);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //  # Effect: scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  //  # Effect: add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {show && (
        <button
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed cursor-pointer bottom-6 right-6 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <ArrowUpToLine className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
