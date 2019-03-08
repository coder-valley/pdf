import { Component,  ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';
import * as $ from 'jquery'
import html2pdf from 'html2pdf.js'

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pdfpriyanka',
  templateUrl: './pdfpriyanka.component.html',
  styleUrls: ['./pdfpriyanka.component.css']
})
export class PdfpriyankaComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  // private url = "../pdfview/pdfview.component.html";
  private url = 'https://verify24x7.in/vp/client/getnewbulkdatareport';
  public allCase;
  public Id;
  public clientDetails;
  public caseDetails:any[];
  public data;
  public linkData: any[];



  safeSrc: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer, public appService: AppService) { 
  
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.Id = "5c78f4b84242312fd2c3d7d2"
    this.getCase();
  }
  photoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.linkData[0]);
  }

  

  public getCase = () => {
    this.caseDetails = [];
    this.linkData = [];
    this.appService.postfunction(this.url, {Id:this.Id})
      .subscribe((response) => {
        if(response){
          this.data = response.x[0]
          // console.log(data);
          
          if(response.x[0].m_client_qc == 'r') {           
            response.y.forEach( (element, arr, ind) => {
              if(element.manual_client_qc == 'r') {
                this.caseDetails.push(element); 
                this.linkData.push(element.link)
                
                console.log(this.linkData)
              }
            });            
          }
          
        }
      }, (err) => {
        console.log(err);
      });
  }







  details =  {name: 'Ashwini'}
  fatherDetail = {name: 'ABETCAG629'}
  fatherName = {fname: 'Abhi Kumar'}
  dob = {dateOfBirth: '17-06-1999'}
  duration = {stay: 'Jan-2000 to Jun-2018'}
  year = {search: '30-08-2018'}
  addresses=  {address: '41-2-4/1 NTR COLONY WARD19WANAPARTHY MAHBUBNAGAR HYDERABAD'}
  stay= {duration: 'NotAvailable'}


  public generatePDF() {
    var HTML_Width = $("#details").width();
    var HTML_Height = $("#details").height();
    var top_left_margin = 10;
    var PDF_Width = HTML_Width+(top_left_margin*2);
    var PDF_Height = (PDF_Width*1)+(top_left_margin*2);


    // var oIframe = document.getElementById('ifame').print();
    // var oContent = document.getElementById('ifame').contentDocument;
    // var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
    // if (oDoc.document) oDoc = oDoc.document;
    // oDoc.write("<html><head><title>title</title>");
    // oDoc.write("</head><body onload='this.focus(); this.print();'>");
    // oDoc.write(oContent + "</body></html>");	    

    // oDoc.close(); 	    

    // var opt = {
    //   margin:       1,
    //   filename:     'file.pdf',
    //   image:        { type: 'png', quality: 1.00 },
    //   html2canvas:  { scale: 1 },
    //   jsPDF:        { unit: 'pt', format: [PDF_Width, PDF_Height], orientation: 'p', compressPDF: true }
    // };

    // New Promise-based usage:
    // html2pdf().set( {pagebreak: { mode: ['avoid-all', 'css', 'legacy'] } },opt).from(oContent).save();
    //

    // const elementToPrint = document.getElementById('details'); //The html element to become a pdf
    // const pdf = new jspdf('p', 'pt', 'a4');
    // pdf.addHTML(elementToPrint, () => {
    //     pdf.save('web.pdf');
    // });

  }



}
