export interface ITableConfig {
   rowsPerPage: number;
   columns: ITableColumnConfig[];
}

export interface ITableColumnConfig {
   name: string;
   visible: boolean;
   width?: number;
}