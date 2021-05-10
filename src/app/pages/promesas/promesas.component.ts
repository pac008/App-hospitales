import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.getUsuario().then( console.log );
    // const promesa = new Promise( ( resolve, reject ) => {
  
    //   if ( false ) {
    //     resolve('Bonjour');

    //   } else {
    //     reject('Algo salió mal')
    //   }
    // });

    // promesa.then( console.log )
    // .catch( console.log )

    // console.log('HOla');
  }

   async getUsuario() {


    return new Promise( resolve => {
      
      fetch('https://reqres.in/api/users')
          .then( resp => resp.json() )
          .then( resp => resolve( resp.data ) );
    })

    // const usuarios = await fetch('https://reqres.in/api/users');
    //  return await usuarios.json();
    
  }

}
