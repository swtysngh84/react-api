var mongoose =require('mongoose');
var Emp=mongoose.model('Emp',{
	name:{
		type:String,
		required:true
	},
	email:{
		type:String
	},
      gender:{
		type:String
	  },
      city:{
		type:String
	  },
	  password:{
		  type:String
	  }

})
module.exports={
    Emp
}