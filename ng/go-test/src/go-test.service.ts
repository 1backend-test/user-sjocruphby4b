import { Injectable } from '@angular/core';
import { NgClient } from '@1backend/ng-client';




@Injectable()
export class Service {
  constructor(private ngClient: NgClient) {}

  getHi(): Promise<string> {
    return this.ngClient.call<string>("user-sjocruphby4b", "go-test", "GET", "/hi", {  });
  }

  getImportedHi(): Promise<string> {
    return this.ngClient.call<string>("user-sjocruphby4b", "go-test", "GET", "/imported-hi", {  });
  }

  postInputExample(rect: Rectangle, unit: string): Promise<Output> {
    return this.ngClient.call<Output>("user-sjocruphby4b", "go-test", "POST", "/input-example", { "rect": rect, "unit": unit });
  }

  getSqlExample(): Promise<void> {
    return this.ngClient.call<void>("user-sjocruphby4b", "go-test", "GET", "/sql-example", {  });
  }

}
