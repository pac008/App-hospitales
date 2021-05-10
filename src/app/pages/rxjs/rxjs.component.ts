import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  subcriptor: Subscription;
  constructor() {

   
    this.subcriptor = this.retornaIntervalo()
              .subscribe( valor => console.log( valor ) )

    // this.retornaObservable().pipe(
    //   retry(3)
    // ).subscribe( valor => console.log('sub', valor ),
    //                 error => console.warn('Error: ', error),
    //                 () => console.info('Obs Terminado')
    
    // );
  }

  ngOnDestroy() {
    this.subcriptor.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(200)
              .pipe(
                map( valor => valor + 1), // 0 => 1
                filter( valor => ( valor % 2 === 0 ) ? true : false ),
                take(1000)
              );

  
  }
  retornaObservable():Observable<number> {

    let i = -1;
    
    return new Observable<number>( observer => {
      
      const intervalo = setInterval( () => {
        
        i++;
        observer.next( i );

        if ( i === 4 ) {
      
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i === 2 ) {
          observer.error('i llegó al valor de 2 :D');
        } 
      }, 1000)
    });

  }

}
