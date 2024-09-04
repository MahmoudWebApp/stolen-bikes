/* eslint-disable @typescript-eslint/no-explicit-any */

interface IProps {
  setTitle: (title: string) => void;
}
const SearchTitle: React.FC<IProps> = (props) => {

  const handleInputChange = (e: any) => {
    props.setTitle(e.target.value);
  };


  return (
    <div className="flex justify-center items-center ">
      <form className="w-full" >
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search Title..."
          className="border border-gray-300 rounded p-2 w-full"
        />
      </form>
    </div>
  );
};

export default SearchTitle;
