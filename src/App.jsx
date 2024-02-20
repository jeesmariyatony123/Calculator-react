import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState("")

  const handleClick = e => setResult(result.concat(e.target.id))

  const clear = () => setResult("")

  const deleteEl = () => setResult(result.slice(0, -1))

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <>

      <div className="container">
        <div className="calculator">
          <form>
            <div className="display">
              <input value={result} type="text" id="result" className="form-control" name="display" placeholder="0" readOnly />
            </div>
            <div>
              <input type="button" onClick={clear} value="AC" />
              <input type="button" id="del" onClick={deleteEl} value="DE" />
              <input type="button" id='.' onClick={handleClick} value="." />
              <input type="button" id='/' onClick={handleClick} value="/" />
            </div>
            <div>
              <input type="button" id='7' onClick={handleClick} value="7" />
              <input type="button" id='8' onClick={handleClick} value="8" />
              <input type="button" id='9' onClick={handleClick} value="9" />
              <input type="button" id='*' onClick={handleClick} value="*" />
            </div>
            <div>
              <input type="button" id='4' onClick={handleClick} value="4" />
              <input type="button" id='5' onClick={handleClick} value="5" />
              <input type="button" id='6' onClick={handleClick} value="6" />
              <input type="button" id='-' onClick={handleClick} value="-" />
            </div>
            <div>
              <input type="button" id='1' onClick={handleClick} value="1" />
              <input type="button" id='2' onClick={handleClick} value="2" />
              <input type="button" id='3' onClick={handleClick} value="3" />
              <input type="button" id='+' onClick={handleClick} value="+" />
            </div>
            <div>
              <input type="button" id='00' onClick={handleClick} value="00" />
              <input type="button" id='0' onClick={handleClick} value="0" />
              <input type="button" value="=" className="equal" onClick={calculate} />
            </div>
          </form>
        </div>
      </div>



    </>
  )
}

export default App
