import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VenteComponent } from '../client/vente/vente/vente.component';
import { VenteListComponent } from '../vente-list/vente-list.component';
import { VoutputService } from '../_services/Voutput.service';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-other-vente',
  templateUrl: './other-vente.component.html',
  styleUrls: ['./other-vente.component.css']
})
export class OtherVenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
