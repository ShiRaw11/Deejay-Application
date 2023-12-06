import { Radio } from "@mui/material"
import DeejayInput from "../components/common/input" 
import CustomSelect from "../components/common/select"
import DeejayButton from "../components/common/button"

function FirstPage(){
    return(
        <div className="flex justify-center">

<form
            className="items-center mt-[20px] ml-[100px] border w-[500px] flex justify-center h-[500px]"
           
          >
            <div>
            <p className="has-text-centered text-red text-sm mb-[10px] ">
              error
            </p>
          <DeejayInput  label={'First Name'}/>  
          <DeejayInput  label={'Last Name'}/> 
          <div className="ml-4">
            <legend> Gender:</legend>
          <input type="radio" value="Male" name ="gender" className="mb-2" /> Male <br/>
<input type="radio" value="Female" name ="gender" /> Female 
          </div>

          <div className="ml-4 mt-[20px]">
            <legend> Age:</legend>
            <select className="w-[150px] h-[40px] hover:ring-2 focus:ring-2 mt-2">
                <option value ='18-25'> 18-25</option>
                <option value ='18-25'> 26-34</option>
            </select>
          </div>
          <DeejayButton buttonText={'Submit'} to={'/list'} buttonStyle={'mt-[40px] w-[200px] ml-[20%]'}/>
          </div>
</form>
        </div>
       
        
    )
}

export default FirstPage