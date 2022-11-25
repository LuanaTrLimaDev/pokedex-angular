import { Component, OnInit, Input } from '@angular/core';
import { Tipo } from 'src/app/model/Tipo';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.css']
})
export class PokemonTypesComponent implements OnInit {

 @Input()
 types: Tipo[] = [];

  constructor( ) { }

  ngOnInit(): void {

  }


}
