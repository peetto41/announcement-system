import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent implements OnInit {
  editAnnouncementForm: announcementForm = new announcementForm();

  @ViewChild("announcementForm")
  announcementForm!: NgForm;

  isSubmitted: boolean = false;
  announcementId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.announcementId = this.route.snapshot.params['announcementId'];
    this.getAnnouncementDetailById();
  }

  getAnnouncementDetailById() {
    this.httpProvider.getAnnouncementById(this.announcementId).subscribe((data: any) => {
      if (data != null) {
        var resultData = data;
        if (resultData) {
          this.editAnnouncementForm.title = resultData.title;
          this.editAnnouncementForm.detail = resultData.detail;
        }
      }
    },
      (error: any) => { });
  }

  EditAnnouncement(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.editAnnouncement(this.editAnnouncementForm,this.announcementId).subscribe(async data => {
        if (data != null) {
          var resultData = data;
          if (resultData != null) {
              this.toastr.success('แก้ไขข้อมูลสำเร็จ');
              setTimeout(() => {
                this.router.navigate(['']);
              }, 500);
          }
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
