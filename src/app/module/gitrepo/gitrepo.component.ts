import { Component, OnInit } from '@angular/core';
import { GitrepoService } from './service/gitrepo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gitrepo',
  templateUrl: './gitrepo.component.html',
  styleUrls: ['./gitrepo.component.css'],
})
export class GitrepoComponent implements OnInit {
  repodatas: any;
  config: any;

  constructor(private gitrepoService: GitrepoService) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
    };
  }

  ngOnInit(): void {
    this.getrepodata();
  }

  public pagechange(event: any): void {
    this.config.currentPage = event;
  }

  public getrepodata(): void {
    this.gitrepoService.getdata().subscribe(
      (data) => {
        this.repodatas = data.items as any;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
