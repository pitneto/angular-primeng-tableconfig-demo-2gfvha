import { Injectable } from '@angular/core';
import { Table } from 'primeng/table';

import { TableConfigService } from './table-config.service';
import { ITableConfig } from './ITableConfig';

const ROWS_PER_PAGE_DEFAULT = 25;

interface ITableColumn {
  name: string;
  header: string;
  type?: string;
  visible?: boolean;
  width?: number;
}

export interface IStarWarsTableConfig extends ITableConfig {
  rowsPerPage: number;
  columns: {
    name: string;
    visible: boolean;
    header: string;
    type?: string;
    width?: number;
  }[];
}

@Injectable()
export class StarWarsService {
  static tableId = 'StarWars';
  tableColumns: ITableColumn[] = [
    {
      name:   "name",
      header: "Name"
    },
    {
      name:   "cost_in_credits",
      header: "Cost [Credits]",
      type:   "number"
    },
    {
      name:   "starship_class",
      header: "Class"
    },
    {
      name:   "hyperdrive_rating",
      header: "Hyperdrive Rating (lower is better)",
      type:   "number"
    }
  ];

  constructor(private tableConfigService: TableConfigService) {}

  getTableConfig(): IStarWarsTableConfig {
    let tableConfig: IStarWarsTableConfig = this.tableConfigService.get(StarWarsService.tableId) as IStarWarsTableConfig;
    if (tableConfig) {
      tableConfig.columns.forEach(c => {
        let tableColumn = this.tableColumns.find(tc => tc.name === c.name);
        c.header = tableColumn.header;
        c.type = tableColumn.type;
      });
    }
    else {
      tableConfig = {
        rowsPerPage: ROWS_PER_PAGE_DEFAULT,
        columns: this.tableColumns.map(tc => {
          return {
            name: tc.name,
            visible: true,
            header: tc.header,
            type: tc.type
          };
        })
      };
    }

    return tableConfig;
  }

  setTableConfig(dataTable: Table, options: any = {}, visibilityOnly: boolean = false) {
    let tableConfig: ITableConfig = {
      rowsPerPage: options.rows || ROWS_PER_PAGE_DEFAULT,
      columns: []
    };
    let domRootNode = dataTable.el.nativeElement;
    let columnHeaderNodeList: NodeListOf<HTMLElement>;

    let tableWidth = domRootNode.querySelector("table").offsetWidth;

    columnHeaderNodeList = domRootNode.querySelectorAll("table thead tr th");

    dataTable.columns
      .forEach((column: ITableColumn, index) => {
        if (column.name) {
          let columnConfig = this.generateTableConfig(column);
          if(!visibilityOnly && column.visible) {
            columnConfig.width = Math.floor(columnHeaderNodeList[index].offsetWidth / tableWidth * 100);
          }
          tableConfig.columns.push(columnConfig);
        }
      });

    this.tableConfigService.set(StarWarsService.tableId, tableConfig);
  }

  generateTableConfig(column: ITableColumn) {
    return {
      name: column.name,
      visible: column.visible,
      width: -1,
    }
  }

  deleteTableConfig() {
    this.tableConfigService.remove(StarWarsService.tableId);
  }
}