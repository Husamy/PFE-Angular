import { Component } from '@angular/core';

@Component({
  selector: 'app-user-logs',
  templateUrl: './user-logs.component.html',
  styleUrls: ['./user-logs.component.css']
})
export class UserLogsComponent {
  logs: any[] = [
    {
      "owner": "test1@example.com",
      "user_id": 1234,
      "action": "login",
      "created_date": "2022-06-01",
      "created_time": "09:30:00"
    },
    {
      "owner": "test2@example.com",
      "user_id": 5678,
      "action": "logout",
      "created_date": "2022-06-01",
      "created_time": "10:00:00"
    },
    {
      "owner": "test1@example.com",
      "user_id": 1234,
      "action": "logout",
      "created_date": "2022-06-01",
      "created_time": "11:00:00"
    },
    {
      "owner": "test3@example.com",
      "user_id": 91011,
      "action": "login",
      "created_date": "2022-06-02",
      "created_time": "08:00:00"
    },
    {
      "owner": "test2@example.com",
      "user_id": 5678,
      "action": "login",
      "created_date": "2022-06-02",
      "created_time": "09:30:00"
    },
    {
      "owner": "test3@example.com",
      "user_id": 91011,
      "action": "logout",
      "created_date": "2022-06-02",
      "created_time": "10:00:00"
    }
  ]
  
  filteredLogs: any[] = [];
  filterBy: string = '';

  constructor() { }

  ngOnInit(): void {
   
    // Initialize filtered logs with all logs
    this.filteredLogs = this.logs;
  }

  filterLogs() {
    if (this.filterBy === '') {
      // If no filter is set, show all logs
      this.filteredLogs = this.logs;
    } else {
      // Filter logs by owner or action
      this.filteredLogs = this.logs.filter(log => log.owner.includes(this.filterBy) || log.action.includes(this.filterBy));
    }
  }

}