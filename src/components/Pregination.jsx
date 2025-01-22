import { useState } from "react";
import button1 from "../imgs/CaretLeft.png";
import button2 from "../imgs/CaretRight.png";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderPages = () => {
    const pages = [];

    if (currentPage > 3) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] border border-gray-300 text-gray-700 hover:text-white hover:bg-[#FF4B00] rounded-md"
        >
          1
        </button>
      );
      if (currentPage > 4) {
        pages.push(
          <span key="start-ellipsis" className="text-gray-500">
            ...
          </span>
        );
      }
    }

    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-[32px] h-[32px] md:w-[40px] md:h-[40px] border border-gray-300 rounded-md ${
            currentPage === i
              ? "bg-[#FF4B00] text-white"
              : "text-gray-700 hover:text-white hover:bg-[#FF4B00]"
          }`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pages.push(
          <span key="end-ellipsis" className="text-gray-500">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] border border-gray-300 text-gray-700 hover:text-white hover:bg-[#FF4B00] rounded-md"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`flex items-center justify-center w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-md border border-gray-300 ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-[#FF4B00] hover:text-white"
        }`}
      >
        <img className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" src={button1} alt="Previous" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">{renderPages()}</div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={`flex items-center justify-center w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-md border border-gray-300 ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-[#FF4B00] hover:text-white"
        }`}
      >
        <img className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" src={button2} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
