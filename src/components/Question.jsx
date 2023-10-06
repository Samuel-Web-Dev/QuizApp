import React,{ useState, useEffect} from 'react'

const Question = () => {
    const [fetchData, setFetchData] = useState([])
    const [loading, setLoading] = useState(true);


     useEffect(()=>{
      const getData = () => {
        // Fetch the data using the API endpoints
        fetch(`https://opentdb.com/api.php?amount=5&category=18`)
        .then(response => response.json())
        .then(json => {
          // const dataWithCombinedAnswers =  json.results.map((item) => {
          //   return ({
          //   ...item,
          //   all_answers: [item.correct_answer, ...item.incorrect_answers]
          //   })

            // setcheckAnswers(item.correct_answer)
          // })
          setFetchData(json.results);
          setLoading(false)
        })
        .catch(error => {
          console.error("Error While Fetching Data" + error);
        })
      }

      getData()

     }, [])


    const [buttonStyle, setButtonStyle] = useState(false)

    //  check if the button is a correct answer or not
    function handleClick(value, numIndex) {
       if(value.range === numIndex){
           setButtonStyle(true)
       }
    }
     
  return (
    <div>
       {loading ? (
        <p>Loading...</p>
       ) : (
        fetchData.map((item, index) => {
          // shuffles the combined answers array
          // const shufflesAnswers = shuffleArray(item.all_answers)
          function randomizedAnswers(){
            const all_answers = [item.correct_answer, ...item.incorrect_answers]

            const newArray = []
            for(let i = 0; i < all_answers.length; i++){
              let random = Math.floor(Math.random() * all_answers.length)
              let randomAnswers = all_answers[random]
              
               newArray.push(
               { 
                answer: randomAnswers,
                range: 0 + 1
               }
              )
            }
            return newArray
          }
           
          
          return (
            <div key={index} className='container'>
              {/* Question to ask  */}
               <h2 className='question'>{item.question}</h2>
               <div>

                {randomizedAnswers().map((button, index) => {
                  return (
                    <button key={index} 
                    onClick={() => handleClick(button, index)} 
                    style={{backgroundColor: buttonStyle ? 'purple' : 'initial'}}
                    >
                      {button.answer}
                      </button>
                  )
                })}

               
               </div>

               <hr />
            </div>

          )
        })
        
          
       )}
          
    </div>
  )
}

export default Question