"use client"
import { useEffect, useRef } from "react";

export default function Model({dilogval}){

      const dialogRef = useRef(null);
    
         const openDialog = () => {
        dialogRef.current.showModal();
      };
      const closeDialog = () => {
        dialogRef.current.close();
        }
        useEffect(()=>{
            if(dilogval){
                openDialog()
            }
        },[dilogval])
    return(
        <dialog   ref={dialogRef}   className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto z-50">
        test
        <button onClick={closeDialog}>
       close
          </button>
      </dialog>
    )
}