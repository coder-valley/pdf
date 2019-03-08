import { Component, OnInit } from '@angular/core';

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})

export class PdfviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  details =  {name: 'Ashwini'}
  fatherDetail = {name: 'KumarAshwini'}
  dob = {dateOfBirth: '17-06-1999'}
  year = {search: '30-08-2018'}
  addresses=  {address: '41-2-4/1 NTR COLONY WARD19WANAPARTHY MAHBUBNAGAR HYDERABAD'}
  stay= {duration: 'NotAvailable'}

  public generatePDF() {
    var data = document.getElementById('details'); 
    html2canvas(data).then(canvas => { 
    // Few necessary setting options 
    var imgWidth = 208; 
    var pageHeight = 495; 
    var imgHeight = canvas.height * imgWidth / canvas.width; 
    var heightLeft = imgHeight; 
    
    const contentDataURL = canvas.toDataURL('image/png') 
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
    var position = 0; 
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
    pdf.save('MYPdf.pdf'); // Generated PDF  
    }); 
 } 
  

}
