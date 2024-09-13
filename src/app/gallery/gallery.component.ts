import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service'; 
//import * as $ from 'jquery';                    //importing  jquery

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  SpResult: any;
  table: any;
  table2: any;
  list: any;
  selectedList: any;
  selectedListimg: any;

  
  constructor(private mainservice:MainService) { }

  ngOnInit(): void {
    this.PhotoPublicList();
  
  }

  PhotoPublicList() {debugger
    var MoObj: any = {}
    MoObj.Pid = "a2f71d3f-9b36-46cc-963d-86e09b4f63ec";
    MoObj.PkWebSite_PhotoGallery = 0;
    this.mainservice.TwoMethod(MoObj).then((value: any) => {
      this.SpResult = value;
      this.table = this.SpResult.table;
      this.table2 = this.SpResult.table1;
      for (let i = 0; i < this.table.length; i++) {
        let pk = this.table[i].pkWebSite_PhotoGalleryHeader;
        for (let j = 0; j < this.table2.length; j++) {
          let fk = this.table2[j].fkWebSite_PhotoGalleryHeder;
          let photo = this.table2[j].folderPath;
          let imgpath = this.table2[j].photoPath;
          if (pk == fk) {
            this.table2[j]['photopath'] = imgpath;
            this.table2[j]['images'] = photo;
            this.list.push(this.table2[j]);
          }
        }
      }
    });
  }
 
  // openlist(m: any) {
  //   this.selectedList = m
  //   $("#containerAll").hide();
  // }
  
  // openlistt(n: any) {
  //   this.selectedListimg = n
  // }
}