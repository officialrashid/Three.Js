import React, { useState } from 'react';

const ControllComponents = ({objects,setObjects}:any) => {
   


    const handleSpeedChange = (index: number, value: string) => {
        const newObjects = [...objects];
        newObjects[index].speed = Math.max(0, parseFloat(value) || 0);
        setObjects(newObjects);
      };
    
      const toggleVisibility = (index: number) => {
        const newObjects = [...objects];
        newObjects[index].isVisible = !newObjects[index].isVisible;
        setObjects(newObjects);
      };
    
      const toggleRotation = (index: number) => {
        const newObjects = [...objects];
        newObjects[index].isRotating = !newObjects[index].isRotating;
        setObjects(newObjects);
      };

      



  return (
    <div className="flex flex-wrap gap-8 justify-center mt-16">
        {objects.map((object:any,index:number)=>(
 <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 h-32 flex flex-col justify-between border border-gray-300 rounded-md p-2" key={index}>
 <div className="flex gap-2 w-full h-1/3 ">
    {object.isVisible ? (
   <button className="bg-blue-500 flex-1 text-white py-1 font-roboto rounded-md text-md" 
   onClick={() => toggleVisibility(index)}
   >Hide</button>
    ):(
        <button className="bg-blue-500 flex-1 text-white py-1 font-roboto rounded-md text-md" 
        onClick={() => toggleVisibility(index)}
        >Unhide</button>  
    )}

   {object.isRotating ? (
  <button className="bg-blue-500 flex-1 text-white py-2 font-roboto rounded-md text-md"
  onClick={() => toggleRotation(index)}
 >Stop</button>
   ):(
    <button className="bg-blue-500 flex-1 text-white py-2 font-roboto rounded-md text-md"
    onClick={() => toggleRotation(index)}
   >Start</button>
   )}
 
 </div>
 <div className='text-gray-300  flex  w-full h-1/3  justify-start items-center pl-1 '>
   <p>Rotation Speed:-</p>
 </div>
 <div className='text-gray-300   flex  w-full h-1/3  justify-between gap-2'>
  <div className='w-3/4 items-center flex justify-start pl-1'>
<input type="range" 
 value={object.speed} 
 min="0"
 max="1"
 step="0.01"

onChange={(e) => handleSpeedChange(index, e.target.value)}
/>

  </div>
  <div className='w-1/4  '>
<input type="number" value={object.speed}   className='bg-gray-300 w-full h-full rounded-md text-white items-center flex justify-center'
onChange={(e) => handleSpeedChange(index, e.target.value)}
step="0.01"
min="0"
max='1'

/>
  </div>

 </div>
</div>
        ))}
    </div>
  );
}

export default ControllComponents;
