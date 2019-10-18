import { Component, OnInit } from '@angular/core';
import {peticiones} from '../../services/petitions';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [peticiones]
})
export class TableComponent implements OnInit {
 
	public newUser:any;
	public users:any;
	public deleteUserV:any;
  public updateUser:any;
  public theUser:any;
  constructor(
  	private _peticiones:peticiones
  	) { 

  	this.newUser = {
      id: '',
  		userName: '',
      age: '',
      jobTitle:''
  	}



 
  }

  ngOnInit() {
    this._peticiones.getUser().subscribe(
      resul =>{
        this.users = resul;
        //console.log(resul);
      },
      e => {
        console.log(e);
      }
    );
    



  }

  


addUser(){
  this._peticiones.addUser1(this.newUser).subscribe(
          resul=>{
            console.log(resul);
            alert('User added');
            window.location.reload();
          },
          e=>{
            console.log(e);
          });
 
}




updateUserF(){
  var updateU = $('#userName').val(); 
   if (updateU.length <= 0){
    alert('Please complete the field to update')
  }
  else {
		this._peticiones.updateUser1(this.newUser).subscribe(
  	resul=>{
  		//alert('User Updated');
      window.location.reload();
  	},
  	e=>{
      alert('Id not found');
  		console.log('Id not found'+e);
  	});
    }
}
  



deleteUser(){
  var deleteU = $('#userName').val(); 
  
  if (deleteU.length <= 0){
    alert('Please complete the field to delete')
  }
  else {
  	  this._peticiones.deleteUser1(this.newUser).subscribe(
  	resul=>{
      //alert('User deleted');
      window.location.reload();
  		  		
  },
  e=>{
  	console.log('error ' + e);
  }
  );
}
}

  

}
