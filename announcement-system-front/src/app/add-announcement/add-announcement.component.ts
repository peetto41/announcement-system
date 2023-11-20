import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})

export class AddAnnouncementComponent implements OnInit {
  addAnnouncementForm: announcementForm = new announcementForm();

  @ViewChild("announcementForm")
  announcementForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {  }

  AddAnnouncement(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveAnnouncement(this.addAnnouncementForm).subscribe(async data => {
        var resultData = data
        if (resultData != null) {
          this.toastr.success("บันทึกเสร็จสิ้น");
          setTimeout(() => {
            this.router.navigate(['']);
          }, 500);
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['']);
          }, 500);
        });
    }
  }
}


export class announcementForm {
  title: string = "";
  detail: string = "";
}
