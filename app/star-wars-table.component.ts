import { AfterViewInit, AfterViewChecked, Component, ViewChild } from '@angular/core';
import { Column, Table } from 'primeng/table';

import { STAR_WARS_SHIPS } from './star-wars-ships';
import { StarWarsService, IStarWarsTableConfig } from './star-wars.service';

@Component({
  selector:    'star-wars-table',
  templateUrl: './star-wars-table.component.html',
  styleUrls:   [ './app.component.css' ]
})
export class StarWarsTableComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('turboTable') turboTable: Table;
  tableConfig: IStarWarsTableConfig;
  columnsForDialog;
  starships = STAR_WARS_SHIPS;
  showColumnVisibilityDialog = false;
  viewCheckedJobs: Function[] = [];

  constructor(private starWarsService: StarWarsService) {
    this.tableConfig = starWarsService.getTableConfig();
  }

  ngAfterViewInit() {
    this.applyConfigStyleToColumns();
  }

  ngAfterViewChecked(){
    this.viewCheckedJobs.forEach(func => func());
    this.viewCheckedJobs = [];
  }

  get visibleAttributeColumns() {
    return this.tableConfig.columns.filter(col => col.visible);
  }

  private applyConfigStyleToColumns() {
    let tableHeads: NodeListOf<HTMLElement> = this.turboTable.el.nativeElement.querySelectorAll("th");
    let map = this.buildMap(this.tableConfig.columns.map(c => c.name), this.tableConfig.columns.map(c => c.width));
    this.tableConfig.columns.forEach((column, index) => {
      tableHeads[index].style.setProperty("width", this.calculateWidthFromValue(map.get(column.name)));
    });
  }

  private buildMap(arrayA: string[],arrayB: any[]): Map<string,any> {
    let result: Map<string,any> = new Map();
    arrayA.forEach((element: string,index: number) => {
      result.set(element, arrayB[index]);
    });
    return result;
  }

  private calculateWidthFromValue(value: number): string {
    if(value <= 0) {
      return "auto";
    }
    return value+'%';
  }

  saveTableConfig() {
    this.starWarsService.setTableConfig(this.turboTable, {rows: this.tableConfig.rowsPerPage});
  }

  changeColumnVisibility() {
    this.columnsForDialog = this.tableConfig.columns.map(c => {
      return { ...c };
    });
    this.showColumnVisibilityDialog = true;
  }

  applyChangedColumnVisibility() {
    this.tableConfig.columns = this.columnsForDialog;
    this.starWarsService.setTableConfig(this.turboTable, {}, true);
    this.showColumnVisibilityDialog = false;
  }

  resetTableConfig() {
    this.starWarsService.deleteTableConfig();
    this.tableConfig = this.starWarsService.getTableConfig();
    // without this deferred width setting only one column would be visible at all..
    // you can see the issue when hiding a column and resetting tableConfig, widths are toggling each time you press reset..
    this.viewCheckedJobs.push(() => this.applyConfigStyleToColumns());
  }
}