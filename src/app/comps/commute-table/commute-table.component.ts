import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commute-table',
  templateUrl: './commute-table.component.html',
  styleUrls: ['./commute-table.component.css']
})
export class CommuteTableComponent implements OnInit {
    @Input() commute = [];
  constructor() { }

    gCommuteTable() {
        let max = 0;
        // we look for the commute that has the most options

        let res = Object.values(this.commute)
        for (let item of res) {
            if (max < item.data.length) { max = item.data.length }
        }

        // we sort so the one that got the most options are on the left
        res.sort((a, b) => b.data.length - a.data.length)
        // we equalize the remaining commutes with the same number of fields
        for (let item of res) {
            if (item.data.length < max) {
                for (let i = 0; i == max - item.data.length; i++) {
                    item.data.push({ name: " ", distance: "" })
                }
            }
        }
        // if table is uneven make it even
        if (res.length % 2 != 0) {
            let mock = { name: "", icon: "", data: [] }
            for (let x = 0; x < res[res.length - 1].data.length; x++) {
                mock.data.push({ name: "", distance: "" })
            }
            res.push(mock)
        }

        return res
    }

  ngOnInit() {
  }

}
