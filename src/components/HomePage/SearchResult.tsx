import { useEffect,useState } from "react";
import image_1  from "../../assets/image/1.jpeg"
import image_2  from "../../assets/image/2.jpeg"
import image_3  from "../../assets/image/3.jpeg"
import image_4  from "../../assets/image/4.jpeg"
import image_5  from "../../assets/image/5.jpeg"
import image_6  from "../../assets/image/6.jpeg"
import image_7  from "../../assets/image/7.jpeg"
import image_8  from "../../assets/image/8.jpeg"
import image_9  from "../../assets/image/9.jpeg"
import image_10  from "../../assets/image/10.jpeg"

interface SearchResultProps {
  question: string;
  chatGPTResponse: string;
  searchClicked: boolean;
  error: any;
}
function SearchResult ({question, chatGPTResponse}:SearchResultProps) {
  const arts = [image_1,image_2, image_3, image_4, image_5, image_6,
  image_7, image_8, image_9, image_10];
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  useEffect(()=> {
    const newRandomNumber = Math.floor(Math.random()*10)+1;
    setRandomNumber(newRandomNumber);
  }, [question]);
  return (
    <div className="@container   overflow-auto border-2 border-gray-400 border-opacity-25 rounded-lg rounded-[10px] h-100 w-full">
      {randomNumber && (
        <>
        <img className="object-cover h-48 w-full rounded-t-lg"
        src={arts[randomNumber]} alt={`image${randomNumber+1}`}/>
        <div className="p-4 ">
        <p className="text-base">{question}</p>
        <p className="text-base md:text-lg">{chatGPTResponse}</p>
        </div>
        </>
      )}
    </div>
    
  )
}

export default SearchResult;