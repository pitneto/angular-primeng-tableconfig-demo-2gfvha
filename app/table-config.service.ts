import {Injectable} from "@angular/core";

import {ITableConfig} from "./ITableConfig";

@Injectable()
export class TableConfigService {
   get(tableId: string): ITableConfig {
      return JSON.parse(localStorage.getItem(`tableConfig:${tableId}`));
   }

   set(tableId: string, config: ITableConfig) {
      localStorage.setItem(`tableConfig:${tableId}`, JSON.stringify(config));
   }

   remove(tableId: string) {
      localStorage.removeItem(`tableConfig:${tableId}`);
   }
}
