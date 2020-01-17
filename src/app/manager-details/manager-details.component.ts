import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {
  manager:string;
  projects:any;
  Description:string;
  constructor(private Activatedroute:ActivatedRoute) { }
  data={"Srikanth":{
    "No_OF_PROJECTS":3,
    "PROJECT_NAMES":["Fiona","OSDM","CPR"],
    "PROJECT_DESC":["A paragraph is a self-contained unit of a discourse in writing dealing with a"+
     "particular point or idea. A paragraph consists of one or more sentences. Though not required by"+
     " the syntax of any language, paragraphs are usually an expected part of formal writing, used to "+
     "organize longer prose.","A paragraph is a series of sentences that are organized and coherent, and"+
   " are all related to a single topic. Almost every piece of writing you do that is longer than a few"+
     " sentences should be organized into paragraphs. ... Paragraphs can contain many different kinds of"+
      " information Paragraphs are the building blocks of papers. Many students define paragraphs in"+
       " terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page "+
        "long, etc. In reality, though, the unity and coherence of ideas among sentences is what"+
        "constitutes a paragraph."
  ],
    },
  
  "PRADEEP":{
    "No_OF_PROJECTS":2,
    "PROJECT_NAMES":["H&M","GMO"],
    "PROJECT_DESC":["A cursor is a pointer to this context area. PL/SQL controls the context"+
    "area through a cursor. A cursor holds the rows (one or more) returned by a SQL statement."+
    " The set of rows the cursor holds is referred to as the active set.You can name a cursor so"+
    "that it could be referred to in a program to fetch and process the rows returned by the SQL "+
    "statement, one at a time. There are two types of cursors -","To access any field of a record,"+
    " we use the dot (.) operator. The member access operator is coded as a period between the record"+
    " variable name and the field that we wish to access. Following is an example to explain the usage"+
    " of record "]
  },
  "DEVARAJ":{
    "No_OF_PROJECTS":1,
    "PROJECT_NAMES":["HLM"],
    "PROJECT_DESC":["A cursor is a pointer to this context area. PL/SQL controls the context"+
    "area through a cursor. A cursor holds the rows (one or more) returned by a SQL statement."+
    " The set of rows the cursor holds is referred to as the active set.You can name a cursor so"+
    "that it could be referred to in a program to fetch and process the rows returned by the SQL "+
    "statement, one at a time. There are two types of cursors -","To access any field of a record,"+
    " we use the dot (.) operator. The member access operator is coded as a period between the record"+
    " variable name and the field that we wish to access. Following is an example to explain the usage"+
    " of record "]
  },
  
  "NAGARAJ":{
    "No_OF_PROJECTS":2,
    "PROJECT_NAMES":["CISCO","RLO"],
    "PROJECT_DESC":["A cursor is a pointer to this context area. PL/SQL controls the context"+
    "area through a cursor. A cursor holds the rows (one or more) returned by a SQL statement."+
    " The set of rows the cursor holds is referred to as the active set.You can name a cursor so"+
    "that it could be referred to in a program to fetch and process the rows returned by the SQL "+
    "statement, one at a time. There are two types of cursors -","To access any field of a record,"+
    " we use the dot (.) operator. The member access operator is coded as a period between the record"+
    " variable name and the field that we wish to access. Following is an example to explain the usage"+
    " of record "]
  },
  
  "SYAM":{
    "No_OF_PROJECTS":1,
    "PROJECT_NAMES":["APPLE"],
    "PROJECT_DESC":["A cursor is a pointer to this context area. PL/SQL controls the context"+
    "area through a cursor. A cursor holds the rows (one or more) returned by a SQL statement."+
    " The set of rows the cursor holds is referred to as the active set.You can name a cursor so"+
    "that it could be referred to in a program to fetch and process the rows returned by the SQL "+
    "statement, one at a time. There are two types of cursors -","To access any field of a record,"+
    " we use the dot (.) operator. The member access operator is coded as a period between the record"+
    " variable name and the field that we wish to access. Following is an example to explain the usage"+
    " of record "]
  },
  
  "SURYA":{
    "No_OF_PROJECTS":2,
    "PROJECT_NAMES":["MICROSOFT","PTO"],
    "PROJECT_DESC":["A cursor is a pointer to this context area. PL/SQL controls the context"+
    "area through a cursor. A cursor holds the rows (one or more) returned by a SQL statement."+
    " The set of rows the cursor holds is referred to as the active set.You can name a cursor so"+
    "that it could be referred to in a program to fetch and process the rows returned by the SQL "+
    "statement, one at a time. There are two types of cursors -","To access any field of a record,"+
    " we use the dot (.) operator. The member access operator is coded as a period between the record"+
    " variable name and the field that we wish to access. Following is an example to explain the usage"+
    " of record "]
  },
  "KALYAN":{
  "No_OF_PROJECTS":2,
    "PROJECT_NAMES":["WELLSFARGO","STP"],
    "PROJECT_DESC":["A cursor is a pointer to this context area. PL/SQL controls the context"+
    "area through a cursor. A cursor holds the rows (one or more) returned by a SQL statement."+
    " The set of rows the cursor holds is referred to as the active set.You can name a cursor so"+
    "that it could be referred to in a program to fetch and process the rows returned by the SQL "+
    "statement, one at a time. There are two types of cursors -","To access any field of a record,"+
    " we use the dot (.) operator. The member access operator is coded as a period between the record"+
    " variable name and the field that we wish to access. Following is an example to explain the usage"+
    " of record "]
  
  }}
  ngOnInit() {
    this.manager=this.Activatedroute.snapshot.params.managerName
   
    this.projects=this.data[this.manager]["PROJECT_NAMES"]
  }
  description(index){
    this.Description=this.data[this.manager]["PROJECT_DESC"][index]
  }

}
