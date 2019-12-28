import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

class BookFIeld{
  name: string;
  typeOf: string;
  cobol_type: string;
  size: number;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  private book: string; 
  private fields: Array<BookFIeld>; 
  private cols: any[];

  parseBook(){
    this.fields = [];
    let aux = this.book.split('\n');
    for(let i=0; i<aux.length; i++){
      aux[i] = aux[i].replace('\s+$', '');
      if(aux[i].match(/^.{5}[*].*$/)){
        delete aux[i];
      }
    }
    let book_text = aux.join('');
    console.log(book_text);
    aux = book_text.split('.');
    for(let i=0; i<aux.length; i++){
      aux[i] = aux[i].replace('\,', '');
      aux[i] = aux[i].replace('\s+', '\s');
      console.log(aux[i]);
      this.parseItem(aux[i]);
    }
  }

  parseItem(item: string){
    let parse = null; 
    parse = item.match(/^.{5}[^*]\s+\d+\s+(\S+)\s+PIC\s+([X^A^G^N])\s*\((\d+)\).*$/);
    if(parse){
      let new_column = new BookFIeld();
      new_column.name = parse[1];
      new_column.typeOf = 'String';
      new_column.cobol_type = 'PIC ' + parse[2];
      new_column.size = parseInt(parse[3]);
      this.fields.push(new_column);
      return;
    }

    parse = item.match(/^.{5}[^*]\s+\d+\s+(\S+)\s+PIC\s+([X^A^G^N])\s*\((\d+)\).*$/);
    if(parse){
      let new_column = new BookFIeld();
      new_column.name = parse[1];
      new_column.typeOf = 'Integer';
      new_column.cobol_type = 'PIC ' + parse[2];
      new_column.size = parseInt(parse[3]);
      this.fields.push(new_column);
      return;
    }    
  }

  constructor() {
      
  }

  ngOnInit() {
    this.book="     ***********************************************\n     * CUSTOMER RECORD QTXCUS2R\n     * KEY FOR RECORDS IN VSAM FILE IS CUSTOMER-NAME\n     ***********************************************\n         05 CUSTOMER-RCD.\n           10 CUSTOMER-NAME.\n             15 LAST-NAME    PIC X(16).\n             15 FIRST-NAME   PIC X(16).\n           10 CUSTOMER-HOME-ADDRESS.\n             15 STREET       PIC X(30).\n             15 CITY         PIC X(20).\n             15 STATE        PIC X(2).\n             15 ZIP          PIC X(10).\n           10 CUSTOMER-PHONE-NUMBER    PIC X(10).\n           10 CUSTOMER-CREDIT-LIMIT    PIC S9(6)V99.\n           10 CUSTOMER-ACCT-BALANCE    PIC S9(13)V99 COMP-3\n                          OCCURS 2 TIMES.\n           10 CUSTOMER-INTEREST-RATE        COMP-1\n                          OCCURS 2 TIMES.";    
    
    this.fields = [];

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'typeOf', header: 'Type' },
      { field: 'cobol_type', header: 'COBOL Type' },
      { field: 'size', header: 'Size' },
    ];
  }
}