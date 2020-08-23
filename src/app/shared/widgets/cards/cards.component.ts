import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() pencentage: string;
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
        text: 'bed vacancy changes in past 30 days'
      },
      subtitle: {
        text: 'Sources: <a href="https://nfrmc.com/">' +
          'nfrmc.com</a> &amp; <a href="https://nfrmc.com/">' +
          'nfrmc.com</a>'
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          // tslint:disable-next-line:typedef
          formatter() {
            return this.value; // clean, unformatted number for year
          }
        },
        accessibility: {
          rangeDescription: 'Range: last 100 days.'
        }
      },
      yAxis: {
        title: {
          text: 'Number of vacancies'
        },
        labels: {
          // tslint:disable-next-line:typedef
          formatter() {
            return this.value / 1000;
          }
        }
      },
      tooltip: {
        pointFormat: 'This location had <b>{point.y:,.0f}</b><br/>beds left {point.x} days ago'
      },
      plotOptions: {
        area: {
          pointStart: 30,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: '',
        data: [null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 226, 260, 169, 106,
          165, 124, 132, 122, 152, 163, 173, 183, 193, 105,
          113, 130, 144, 155, 185, 195, 205, 244, 293, 235,
          362, 349, 392, 354, 374, 397, 450, 400, 410, 200,
          370, 350, 330, 310, 290, 200, 250, 240, 230, 220,
          200, 200, 190, 180, 100, 170, 10, 157, 141, 187,
          126, 68, 50, 41, 42, 42, 45, 45
        ]
      }]
    };
    HC_exporting(this.Highcharts);

  }

}
