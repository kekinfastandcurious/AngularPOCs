import { Component, OnInit } from '@angular/core';
import { POC1Service, User } from './poc1.service';

@Component({
  selector: 'app-users',
  templateUrl: `users.component.html`,
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public toggleFlag = true;

  ngOnInit(): void {
    this.pocService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  public onToggleFlag(): void {
    this.toggleFlag = !this.toggleFlag;
  }

  constructor(private pocService: POC1Service) {}
}
