import { Component } from '@angular/core';

interface DocumentLog {
  action: string;
  document_id: number;
  owner: string;
  user_id: number;
  created_date: string;
  created_time: string;
}
@Component({
  selector: 'app-document-logs',
  templateUrl: './document-logs.component.html',
  styleUrls: ['./document-logs.component.css']
})


export class DocumentLogsComponent {
  logs: DocumentLog[] = [
    {
      "action": "created",
      "document_id": 123,
      "user_id": 456,
      "owner": "test1@example.com",
      "created_date": "2022-06-01",
      "created_time": "09:30:00"
    },
    {
      "action": "updated",
      "document_id": 456,
      "user_id": 789,
      "owner": "test2@example.com",
      "created_date": "2022-06-02",
      "created_time": "10:30:00"
    },
    {
      "action": "created",
      "document_id": 789,
      "user_id": 123,
      "owner": "test3@example.com",
      "created_date": "2022-06-03",
      "created_time": "11:30:00"
    }
  ];

  filteredLogs: DocumentLog[] = [];
  actions: string[] = ["created", "updated", "deleted"];
  selectedAction: string = "";
  selectedDate: string = "";

  constructor() {
    this.filteredLogs = this.logs;
  }

  applyFilters() {
    let filteredLogs = this.logs;

    if (this.selectedAction) {
      filteredLogs = filteredLogs.filter(log => log.action === this.selectedAction);
    }

    if (this.selectedDate) {
      filteredLogs = filteredLogs.filter(log => log.created_date === this.selectedDate);
    }

    this.filteredLogs = filteredLogs;
  }
  
}