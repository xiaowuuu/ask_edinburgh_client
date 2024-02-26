import { FormEvent, useState,useEffect } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
// import { postData } from "../../services/Api";
import { getChatGPTResponse } from "../../services/ChatGPTService";

const userId = "65c3c18e2fd9e9cf2177e773";

function SearchContainer () {
  const [inputQuestion, setInputQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [chatGPTResponse, setChatGPTResponse] = useState("");//the state caused the empty string of first answer text.
  const [error, setError] = useState('');
  //input question, click, get and useEffect response from chatgpt
  //submit question and answer together to database
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuestion(event.target.value);
  }

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await getChatGPTResponse(inputQuestion);
      setChatGPTResponse(response);    
    } catch (error) {
      console.error("Error submitting questions:", error);
      setError("error submitting question")
    }
  }
  useEffect(() => {
    if (chatGPTResponse !== '') {
      getChatGPTResponse(inputQuestion)
        .then(() => {
          setSubmittedQuestion(inputQuestion);
          setInputQuestion('');
          setSearchClicked(true);
        })
        .catch((error:any) => {
          console.error("Error submitting questions:", error);
          setError("error submitting question")
        });
    }
  }, [chatGPTResponse]);
  
  return (
    <div>
      <Search
      question={inputQuestion}
      onQuestionChange={handleQuestionChange}
      onSearchSubmit={handleSearchSubmit}
      />
      {searchClicked ? (
        <SearchResult 
        question={submittedQuestion} 
        chatGPTResponse= {chatGPTResponse}
        searchClicked={searchClicked}
        error={error}/>
      ) : (
        <div>
          <h3>Ask your first question to get started!</h3>
        </div>
      )} 
    </div>
  )
}

export default SearchContainer;