

function findLargestWord(){
    
    let arr = document.getElementById('texto').value.split(' ');
    
    let cadena_final = '';

    for (let i = 0; i < arr.length; i++) {

        if(cadena_final.length < arr[i].length){

            cadena_final = arr[i]
        }  
    }

    document.getElementById('salida').value = cadena_final.length; 
}

function limpiar(){

    document.getElementById("texto").value = "";
    document.getElementById("salida").value = "";
}


// alert();

// function largestWord(mensaje){

  
//     let arr = mensaje.split(' ');
//     let cadena_final = '';
  
//     for (let i = 0; i < arr.length; i++) {
  
//         if(cadena_final.length < arr[i].length){
  
//             cadena_final = arr[i];
  
//         } 
//     }
  
//      return cadena_final.length;
  
//   }
  
//   console.log(largestWord('hola como estas afortunado'));



// function newArray(datos){
    
    //     for(let i = 0; i < datos.length; i++){
        
        //        newData[i] = Math.max(datos[i]);
        
        //        console.log(newData)
        //     }
        // }
        
        // newArray();
        

// const arr = [[5, 7, 3, 10],[70, 100, 50, 43],[12, 32, 56, 14]]

// function largestOfFour(arr) {
//     const results = [];
//     for (let i = 0; i < arr.length; i++) {
//       let largestNumber = arr[i][0];
//       for (let j = 1; j < arr[i].length; j++) {
//         if (arr[i][j] > largestNumber) {
//           largestNumber = arr[i][j];
//         }
//       }
//       results[i] = largestNumber;
//     }
  
//     return results;
//   }

// const arr = [[1, 20, 3], [4, 5000, 6], [7, 8.98, 9]];
// const results = [];

// for (let i = 0; i < arr.length; i++) {
//    results[i] = Math.max(...arr[i]);
//   }
//   console.log(results);


// function confirmEnding(str, target) {
//     return str.slice(-target.length) === target
//   }
  
//   confirmEnding("Bastian", "n");

// let accumulatedStr = "";

//   for (let i = 0; i < num; i++) {
//     accumulatedStr += str;
//   }

//   return accumulatedStr;