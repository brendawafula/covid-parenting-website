import { Injectable } from '@angular/core';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

export type ImpactSummary = {
  impactType: string;
  impactTitle: string;
  impactNumber: number;
  impactPercentage: number;
  thumbnailSrc: string;
};

export type ImpactSummaryCSVRow = {
  impactType: string;
  impactTitle: string;
  impactNumber: number;
  impactPercentage: number;
};

@Injectable({
  providedIn: 'root'
})
export class ImpactStoriesService {

  constructor(private spreadsheetService: SpreadsheetService) { }

  public fetchImpactSummaries(): Observable<ImpactSummary[]> {
    return this.spreadsheetService.getCSVObjects("assets/impacts/impact_summary.csv")
      .pipe(
        shareReplay(1),
        map((rows: ImpactSummaryCSVRow[]) => {
          let arrImpactSummaries: ImpactSummary[] = [];
          let thumbnailSrc: string;
          rows.forEach((row) => {
            try {
              //add row contents to the array
              thumbnailSrc = row.impactType.toUpperCase() === "REGION"? `assets/impacts/${row.impactTitle}.jpg` : "";

              arrImpactSummaries.push({
                impactType: row.impactType,
                impactTitle: row.impactTitle,
                impactNumber: row.impactNumber,
                impactPercentage: row.impactPercentage,
                thumbnailSrc: thumbnailSrc
              });
            } catch (ex) {

            }


          });

          return arrImpactSummaries;
        })
      );
  }




}
