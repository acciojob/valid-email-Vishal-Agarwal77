function validEmail(str) {
  //your JS code here.
	let ct1=0;
	for(let i=0;i<str.length;i++){
	    ct1++;
	    let ct2=0;
	    if(ct1>1 && str.charAt(i)=="@"){
	        let j=i;
	        for(;j<str.length;j++){
	            ct2++;
	            if(ct2>1 && (str.slice(j)==".com" || str.slice(j)==".co.in" || str.slice(j)==".edu")){
	                return true;
	            }
	        }
	    }
	}
	return false;
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
alert(validEmail(str));
