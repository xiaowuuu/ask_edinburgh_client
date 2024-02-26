import { ChangeEvent, FormEvent, useRef } from "react";

interface SearchProps {
  question:string;
  onQuestionChange: (event:ChangeEvent<HTMLInputElement>)=> void;
  onSearchSubmit:(event: FormEvent<HTMLFormElement>)=> void;
}
function Search ({ question, onQuestionChange, onSearchSubmit}:SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isQuestionEmpty = question.trim() === '';
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>)=> {
    onSearchSubmit(event);
    if (inputRef.current){
      inputRef.current.value = "";
    }
  }
  return (
    <div className="flex flex-col items-center ">
    <form onSubmit={handleSearchSubmit} className="flex items-center">
    <input 
    type="text"
    value={question}
    onChange={onQuestionChange}
    className="w-[600px] border border-gray-500 rounded-full mr-4 px-3 py-2 px-5 focus:outline-none focus:border-blue-700"
    placeholder="Search your idea!"
    ></input>
    <button 
    disabled={isQuestionEmpty}
    type="submit" 
    className={`text-white bg-indigo-600 w-[177px] border-transparency rounded-full mr-4 px-3 py-2 ${isQuestionEmpty ? 'bg-zinc-400 cursor-not-allowed' : ''}`}>Search With AI
    </button>
    {/* button is disabled when question is empty */}
    </form>
    
    <div className="pt-5 pb-5">
      <span className="flex mb-3">
    <p className="text-white  bg-indigo-500 border-transparency rounded-full mr-4 px-7 py-2">
HISTORY
    </p>
    <p className="text-white  bg-amber-300 border-transparency rounded-full mr-4 px-7 py-2">
    EDINBURGH FESTIVAL FRINGE
    </p>
    <p className="text-white  bg-violet-400 border-transparency rounded-full mr-4 px-7 py-2">
    SUNSHINE ON LEITH
    </p>
    </span>
    <span className="flex">
    <p className="text-white  bg-violet-400 border-transparency rounded-full mr-4 px-7 py-2">
    LITERARY HERITAGE
    </p>
    <p className="text-white  bg-amber-300 border-transparency rounded-full mr-4 px-7 py-2">
    EDINBURG’S HOGMANAY
    </p>
    </span>
    </div>
    </div>
  )
}
export default Search;