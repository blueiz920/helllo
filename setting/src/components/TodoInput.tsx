import plus from "../assets/plus.png"

export default function TodoInput(){
  // const handleSubmit = 
  return(
    <div className='flex flex-row justify-center'>
    <input className='flex w-[29rem] h-[2.75rem] border border-[1px] border-solid border-[#d9d9d9] rounded-[0.3rem] p-[0.94rem] mr-[0.5rem]  outline-none focus:placeholder-transparent placeholder-[#d9d9d9]' placeholder='Add a new Task...'></input>
    <div
    className='flex justify-center hover:scale-105 cursor-pointer bg-black rounded-[0.3rem] w-[3.5rem] h-[2.75rem]'>
      <img src = {plus} alt="추가" className='flex scale-50'/>
    </div>
   
    </div>
  );
}