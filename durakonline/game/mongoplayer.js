const User = require('../models/user');



module.exports =async function(ch,Durakusernames){
	
	 Durakusernames.forEach(async(user,index)=>{
		 if(index===ch && index===0 ){ let result1 = await User.findOne({ name:user});
		 let result2 = await User.findOne({ name:Durakusernames[index+1]});
	let arr1= result1.checked.get(Durakusernames[index+1]);
	let arr2= result2.checked.get(user);
	//arr1[0]=arr1[0]+1;
	let one=Array.from(arr1,i=> Number(i));one[0]=one[0]+1
	//arr2[1]=arr2[1]+1;
	let two=Array.from(arr2,i=> Number(i));two[1]=two[1]+1;
	//console.log(one,two);
	result1.checked.set(Durakusernames[index+1],one);
	result2.checked.set(user,two);
	
	 result1.save();
	 result2.save();
		}
		 else if(index===ch && index===1){
		let result1 = await User.findOne({ name:user});
		let result2 = await User.findOne({ name:Durakusernames[index-1]});
	let arr1= result1.checked.get(Durakusernames[index-1]);
	let arr2= result2.checked.get(user);
	//arr1[0]=(arr1[0]+1);
	let one=Array.from(arr1,i=> Number(i));one[0]=one[0]+1
	//arr2[1]=(arr2[1]+1);
	let two=Array.from(arr2,i=> Number(i));;two[1]=two[1]+1;
	//console.log(one,two);
	
	result1.checked.set(Durakusernames[index-1],one);
	result2.checked.set(user,two);
	
		 result1.save();
	 result2.save();	 
			 }})
			
	
		 };		