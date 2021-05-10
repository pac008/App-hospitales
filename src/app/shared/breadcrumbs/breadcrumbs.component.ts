import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public titulosSubs$: Subscription;

  constructor( private router: Router ) {

    this.titulosSubs$ = this.getDataRutas()
                        .subscribe( ({ titulo }) => {
                          console.log('Data en la ruta:', titulo );
                          this.titulo = titulo;
                          document.title = `AdminPro - ${ titulo }`;
                        });
  }
  ngOnDestroy(): void {
    this.titulosSubs$.unsubscribe();
  }

  getDataRutas() {

    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd ) => event.snapshot.firstChild === null ),
        map( ( event: ActivationEnd ) =>  event.snapshot.data )
      );
  }

}
