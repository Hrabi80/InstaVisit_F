import { Component, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { VoutputService } from '../_services/Voutput.service';
@Component({
  selector: 'app-vente-list',
  templateUrl: './vente-list.component.html',
  styleUrls: ['./vente-list.component.css']
})
export class VenteListComponent implements OnChanges {
 
  @Input() groupFilters: Object;
	@Input() searchByKeyword: string;
	Voutput: any[] = [];
	filteredOutput: any[] = [];
  FirOutput: any=[];
  constructor(private ref: ChangeDetectorRef,
              private _service: VoutputService) { }

  ngOnInit() {
    this.loadHouses();

    this._service.getData()
        .subscribe((res) => {
            console.log(res);
            this.FirOutput = res;
        });
  }
  ngOnChanges(): void {
		if (this.groupFilters) this.filterOutputList(this.groupFilters, this.Voutput);
  }
  filterOutputList(filters: any, houses: any): void {
		this.filteredOutput = this.Voutput; 
		const keys = Object.keys(filters);
		const filterHouse = house => {
			let result = keys.map(key => {
				if (!~key.indexOf('age')) {
					if(house[key]) {
						return String(house[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
					} else {
						return false;
					}
				}
			});
			result = result.filter(it => it !== undefined);
			if (filters['ageto'] && filters['agefrom']) {
				if (house['age']) {
					if (+house['age'] >= +filters['agefrom'] && +house['age'] <= +filters['ageto']) {
						result.push(true);
					} else {
						result.push(false);
					}
					} else {
						result.push(false);
					}
				}
			return result.reduce((acc, cur: any) => { return acc & cur }, 1)
		}
		this.filteredOutput = this.Voutput.filter(filterHouse);
		}
		loadHouses(): void {
			this._service.fetchOutput()
			.subscribe(users => this.Voutput = users);
			this.filteredOutput = this.filteredOutput.length > 0 ? this.filteredOutput : this.Voutput;
		}

}
