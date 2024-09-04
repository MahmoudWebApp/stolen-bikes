import { ICount } from "@/models/bikes.model";
import { useGetStolenBikesCountQuery } from "@/services/bikesApi";
import { useEffect, useState, useCallback, useMemo } from "react";

interface IProps {
  pageSize: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const BikePagination: React.FC<IProps> = ({ pageSize, currentPage, setPage }) => {
  const [paginationList, setPaginationList] = useState<React.ReactNode>(<></>);
  const [currentPageGroup, setCurrentPageGroup] = useState(0);

  const { count, isSuccess } = useGetStolenBikesCountQuery<{ count: ICount, isSuccess: boolean }>(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      count: data,
      isSuccess: isSuccess
    }),
  });

  const totalButtons = useMemo(() => Math.ceil((count?.stolen ?? 0) / pageSize), [count, pageSize]);
  const buttonsPerPage = 10;

  useEffect(() => {
    if (isSuccess && totalButtons > 0) {
      const newPageGroup = Math.floor((currentPage - 1) / buttonsPerPage);
      setCurrentPageGroup(newPageGroup);

      const start = newPageGroup * buttonsPerPage;
      const end = Math.min(start + buttonsPerPage, totalButtons);
      const visibleButtons = Array.from({ length: totalButtons }, (_, index) => index).slice(start, end);

      setPaginationList(visibleButtons.map(index => (
        <button
          key={`key-${newPageGroup}-${index}`}
          className={`btn-page w-[40px] h-[40px] rounded-lg flex justify-center items-center
            ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-slate-900 text-slate-50'}`}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      )));
    }
  }, [isSuccess, currentPage, totalButtons, setPage]);

  const handleNextClick = useCallback(() => {
    setCurrentPageGroup(prev => {
      const newPageGroup = prev + 1;
      const newPage = newPageGroup * buttonsPerPage + 1;
      setPage(newPage); 
      return newPageGroup;
    });
  }, [buttonsPerPage, setPage]);

  const handlePreviousClick = useCallback(() => {
    setCurrentPageGroup(prev => {
      const newPageGroup = Math.max(prev - 1, 0);
      const newPage = newPageGroup * buttonsPerPage + 1;
      setPage(newPage);
      return newPageGroup;
    });
  }, [buttonsPerPage, setPage]);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      {currentPageGroup > 0 && (
        <button
          className="btn-page bg-blue-800 text-[14px] text-white w-[60px] h-[40px] rounded-lg flex justify-center items-center"
          onClick={handlePreviousClick}
        >
          Previous
        </button>
      )}
      {paginationList}
      {(currentPageGroup + 1) * buttonsPerPage < totalButtons && (
        <button
          className="btn-page bg-blue-800 text-[14px] text-white w-[60px] h-[40px] rounded-lg flex justify-center items-center"
          onClick={handleNextClick}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default BikePagination;
