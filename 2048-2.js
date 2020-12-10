let arr=[] 
let arrayKey = new Map(); // ассоциативный массив  
let  allDiv= document.querySelectorAll('.number'); // все дивы с блоками
let array= Array.from( allDiv); // массив, куда добавляются дивы
let result= document.querySelector('.point')// переменная для отображения очков
let val =0
result.innerHTML=val
for(let m=0;m<16;m++){ // массив для перечисления блоков от 0 до 15
	arr.push(m) 
} 
for(let i=0;i<array.length;i++){ 
	arrayKey.set(arr[i],array[i]); // добавление в МАР- индкекс= блок 
} 
document.addEventListener('keyup', function(event){ 
	if(event.code == 'ArrowUp'){ 
		for (let key of arrayKey.keys()){ 
			for(let i=12;i>0;i-=4){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-4).style.backgroundColor!='yellow'){ 
					console.log(i) 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i-4).style.backgroundColor='yellow' 
					let numN=arrayKey.get(i).innerHTML 
					if (numN==NaN){ 
						numN.innerHTML=2 
					} 
					else { 
						arrayKey.get(i-4).innerHTML= numN 
					} 
					arrayKey.get(i-4).style.color='black' 				
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i-4).innerHTML && arrayKey.get(i-4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i-4).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				}	
							
			} 
			for(let i=13;i>1;i-=4){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-4).style.backgroundColor!='yellow'){ 
					console.log(i) 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i-4).style.backgroundColor='yellow' 
					let numN=arrayKey.get(i).innerHTML 
					if (numN==NaN){ 
						numN.innerHTML=2 
					} 
					else { 
						arrayKey.get(i-4).innerHTML= numN
					} 
					arrayKey.get(i-4).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i-4).innerHTML && arrayKey.get(i-4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i-4).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				}
			} 
			for(let i=14;i>2;i-=4){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-4).style.backgroundColor!='yellow'){ 
					console.log(i) 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i-4).style.backgroundColor='yellow' 
					let numN=arrayKey.get(i).innerHTML 
					if (numN==NaN){ 
						numN.innerHTML=2 
					} 
					else { 
						arrayKey.get(i-4).innerHTML= numN
					} 
					arrayKey.get(i-4).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i-4).innerHTML && arrayKey.get(i-4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i-4).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				}
			} 
			for(let i=15;i>3;i-=4){ 
			if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-4).style.backgroundColor!='yellow'){ 
				console.log(i) 
				arrayKey.get(i).style.backgroundColor='white' 
				arrayKey.get(i).style.color='white' 
				arrayKey.get(i-4).style.backgroundColor='yellow' 
				let numN=arrayKey.get(i).innerHTML 
				if (numN==NaN){ 
					numN.innerHTML=2 
				} 
				else { 
					arrayKey.get(i-4).innerHTML= numN
				} 

				arrayKey.get(i-4).style.color='black' 
			} 
			if(arrayKey.get(i).innerHTML ===arrayKey.get(i-4).innerHTML && arrayKey.get(i-4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
				arrayKey.get(i-4).innerHTML=arrayKey.get(i).innerHTML*2
				arrayKey.get(i).style.backgroundColor='white'
				arrayKey.get(i).style.color='white'
				result.innerHTML=val+=4
			} 
			} 
		}
	} 
	if(event.code == 'ArrowUp'){ 
		for(let i=0;i<array.length;i++){ 
			if( array[i].style.color=='white' && Math.random() >0.8){ 
				array[i].innerHTML=Math.random() > 0.5 ? 4 : 2; 
				array[i].style.color='black' 
				array[i].style.backgroundColor='yellow' 
				break 
			} 
		} 
	} 
	//if(event.code == 'ArrowUp'){ 
	if(event.code == 'ArrowDown'){ 
		for (let key of arrayKey.keys()){ 
			for(let i=0;i<12;i+=4){ 
			if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+4).style.backgroundColor!='yellow'){ 
				console.log(i) 
				let numN=arrayKey.get(i).innerHTML 
				arrayKey.get(i).style.backgroundColor='white' 
				arrayKey.get(i).style.color='white' 
				arrayKey.get(i+4).style.backgroundColor='yellow' 
				arrayKey.get(i+4).innerHTML= numN 
				arrayKey.get(i+4).style.color='black' 
			} 
			if(arrayKey.get(i).innerHTML ===arrayKey.get(i+4).innerHTML && arrayKey.get(i+4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
				arrayKey.get(i+4).innerHTML=arrayKey.get(i).innerHTML*2
				arrayKey.get(i).style.backgroundColor='white'
				arrayKey.get(i).style.color='white'
				result.innerHTML=val+=4
			} 
		} 
		for(let i=1;i<13;i+=4){ 
			if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+4).style.backgroundColor!='yellow'){ 
				console.log(i) 
				let numN=arrayKey.get(i).innerHTML 
				arrayKey.get(i).style.backgroundColor='white' 
				arrayKey.get(i).style.color='white' 
				arrayKey.get(i+4).style.backgroundColor='yellow' 
				arrayKey.get(i+4).innerHTML= numN 
				arrayKey.get(i+4).style.color='black' 
			} 
			if(arrayKey.get(i).innerHTML ===arrayKey.get(i+4).innerHTML && arrayKey.get(i+4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
				arrayKey.get(i+4).innerHTML=arrayKey.get(i).innerHTML*2
				arrayKey.get(i).style.backgroundColor='white'
				arrayKey.get(i).style.color='white'
				result.innerHTML=val+=4
			} 
		} 
		for(let i=2;i<14;i+=4){ 
			if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+4).style.backgroundColor!='yellow'){ 
				console.log(i) 
				let numN=arrayKey.get(i).innerHTML 
				arrayKey.get(i).style.backgroundColor='white' 
				arrayKey.get(i).style.color='white' 
				arrayKey.get(i+4).style.backgroundColor='yellow'		 
				arrayKey.get(i+4).innerHTML= numN 
				arrayKey.get(i+4).style.color='black' 
			} 
			if(arrayKey.get(i).innerHTML ===arrayKey.get(i+4).innerHTML && arrayKey.get(i+4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
				arrayKey.get(i+4).innerHTML=arrayKey.get(i).innerHTML*2
				arrayKey.get(i).style.backgroundColor='white'
				arrayKey.get(i).style.color='white'
				result.innerHTML=val+=4
			} 
		} 
		for(let i=3;i<15;i+=4){ 
			if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+4).style.backgroundColor!='yellow'){ 
				console.log(i) 
				let numN=arrayKey.get(i).innerHTML 
				arrayKey.get(i).style.backgroundColor='white' 
				arrayKey.get(i).style.color='white' 
				arrayKey.get(i+4).style.backgroundColor='yellow' 
				arrayKey.get(i+4).innerHTML= numN 
				arrayKey.get(i+4).style.color='black' 
			}
			if(arrayKey.get(i).innerHTML ===arrayKey.get(i+4).innerHTML && arrayKey.get(i+4).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
				arrayKey.get(i+4).innerHTML=arrayKey.get(i).innerHTML*2
				arrayKey.get(i).style.backgroundColor='white'
				arrayKey.get(i).style.color='white'
				result.innerHTML=val+=4
			}  
		} 
		} 
	} 
	if(event.code == 'ArrowDown' ){ 
			for(let i=0;i<array.length;i++){ 
				if(array[i].style.color=='white' && Math.random() >0.8){ 
				array[i].innerHTML= Math.random() > 0.5 ? 4 : 2; 
				array[i].style.color='black' 
				array[i].style.backgroundColor='yellow' 
				break 
			} 
		} 
	} 

	if(event.code == 'ArrowLeft'){ 
		for (let key of arrayKey.keys()){ 
			for(let i=3;i>0;i--){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-1).style.backgroundColor!='yellow'){ 
					console.log(i) 
					let numN=arrayKey.get(i).innerHTML 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i-1).style.backgroundColor='yellow' 
					arrayKey.get(i-1).innerHTML= numN 
					arrayKey.get(i-1).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i-1).innerHTML && arrayKey.get(i-1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i-1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				} 
			} 
			for(let i=7;i>4;i--){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-1).style.backgroundColor!='yellow'){ 
					console.log(i) 
					let numN=arrayKey.get(i).innerHTML 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i-1).style.backgroundColor='yellow' 
					arrayKey.get(i-1).innerHTML= numN 
					arrayKey.get(i-1).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i-1).innerHTML && arrayKey.get(i-1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i-1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				} 
			} 
			for(let i=11;i>8;i--){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-1).style.backgroundColor!='yellow'){ 
					console.log(i) 
					let numN=arrayKey.get(i).innerHTML 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i-1).style.backgroundColor='yellow' 
					arrayKey.get(i-1).innerHTML= numN 
					arrayKey.get(i-1).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i-1).innerHTML && arrayKey.get(i-1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i-1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				} 
			} 
			for(let i=15;i>12;i--){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i-1).style.backgroundColor!='yellow'){ 
					console.log(i) 
					let numN=arrayKey.get(i).innerHTML 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i-1).style.backgroundColor='yellow' 
					arrayKey.get(i-1).innerHTML= numN 
					arrayKey.get(i-1).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i-1).innerHTML && arrayKey.get(i-1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i-1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				} 
			} 
		} 
	} 
	if(event.code == 'ArrowLeft' ){ 
		for(let i=0;i<array.length;i++){ 
			if(array[i].style.color=='white'&& Math.random() >0.8){ 
				array[i].innerHTML= Math.random() > 0.5 ? 4 : 2; 
				array[i].style.color='black' 
				array[i].style.backgroundColor='yellow' 
				break 
			} 
		} 
	} 

	if(event.code == 'ArrowRight'){ 
		for (let key of arrayKey.keys()){ 
			for(let i=0;i<3;i++){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+1).style.backgroundColor!='yellow'){ 
					console.log(i) 
					let numN=arrayKey.get(i).innerHTML 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i+1).style.backgroundColor='yellow' 
					arrayKey.get(i+1).innerHTML= numN 
					arrayKey.get(i+1).style.color='black' 
				}
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i+1).innerHTML && arrayKey.get(i+1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i+1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				}  
			} 
			for(let i=4;i<7;i++){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+1).style.backgroundColor!='yellow'){ 
					console.log(i) 
					let numN=arrayKey.get(i).innerHTML 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i+1).style.backgroundColor='yellow' 
					arrayKey.get(i+1).innerHTML= numN 
					arrayKey.get(i+1).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i+1).innerHTML && arrayKey.get(i+1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i+1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				} 
			} 
			for(let i=8;i<11;i++){ 
				if (arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+1).style.backgroundColor!='yellow'){ 
					console.log(i) 
					let numN=arrayKey.get(i).innerHTML 
					arrayKey.get(i).style.backgroundColor='white' 
					arrayKey.get(i).style.color='white' 
					arrayKey.get(i+1).style.backgroundColor='yellow' 
					arrayKey.get(i+1).innerHTML= numN 
					arrayKey.get(i+1).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i+1).innerHTML && arrayKey.get(i+1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i+1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				} 
			} 
			for(let i=12;i<15;i++){ 
				if(arrayKey.get(i).style.backgroundColor=='yellow' && arrayKey.get(i+1).style.backgroundColor!='yellow'){ 
					console.log(i) 
				let numN=arrayKey.get(i).innerHTML 
				arrayKey.get(i).style.backgroundColor='white' 
				arrayKey.get(i).style.color='white' 
				arrayKey.get(i+1).style.backgroundColor='yellow' 
				arrayKey.get(i+1).innerHTML= numN 
				arrayKey.get(i+1).style.color='black' 
				} 
				if(arrayKey.get(i).innerHTML ===arrayKey.get(i+1).innerHTML && arrayKey.get(i+1).style.backgroundColor=='yellow'  && arrayKey.get(i).style.backgroundColor=='yellow'){
					arrayKey.get(i+1).innerHTML=arrayKey.get(i).innerHTML*2
					arrayKey.get(i).style.backgroundColor='white'
					arrayKey.get(i).style.color='white'
					result.innerHTML=val+=4
				} 
			} 
		} 
	} 	
	if(event.code == 'ArrowRight' ){ 
			for(let i=0;i<array.length;i++){ 
				if(array[i].style.color=='white'&& Math.random() >0.8){ 
				array[i].innerHTML= Math.random() > 0.5 ? 4 : 2; 
				array[i].style.color='black' 
				array[i].style.backgroundColor='yellow' 
				break 
			} 
		} 
	} 
})
 function toLose(){
	 if(allDiv.style.backgroundColor==='yellow' ){
		  console.log("ВЫ ПРОИГРАЛИ!!!")
      }
}
 function startNewGame(){
	for(let i=0;i<array.length;i++){ 
		  array[i].style.backgroundColor='white'
	  	  array[i].style.color='white'
		  result.innerHTML=0
	 }
}

