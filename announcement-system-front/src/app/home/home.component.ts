import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">ยืนยันการลบข้อมูล</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูล?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">ยกเลิก</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">ตกลง</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  announcementList: any = [];
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private httpProvider : HttpProviderService) { }
    ngOnInit(): void {
      this.getAllAnnouncement();
    }
    async getAllAnnouncement() {
      this.httpProvider.getAllAnnouncement().subscribe(
        (data: any) => {
          var resultData = data;
            if (resultData) {
              console.log('Announcement List:', resultData);
              this.announcementList = resultData;
            }
        },
        (error: any) => {
          if (error) {
            if (error.status == 404) {
              if (error.error && error.error.message) {
                console.log('Announcement List:', error.error);
                this.announcementList = [];
              }
            }
          }
        }
      );
    }
    AddAnnouncement() {
      this.router.navigate(['add-data']);
    }
    deleteAnnouncementConfirmation(announcement: any) {
      this.modalService.open(MODALS['deleteModal'],
        {
          ariaLabelledBy: 'modal-basic-title'
        }).result.then((result) => {
          this.deleteAnnouncement(announcement);
        },
          (reason) => {});
    }
    deleteAnnouncement(announcement: any) {
      this.httpProvider.deleteAnnouncement(announcement.id).subscribe((data : any) => {
        if (data != null) {
          var resultData = data;
          if (resultData != null) {
            this.toastr.success('ลบข้อมูลสำเร็จ');
            this.getAllAnnouncement();
          }
        }
      },
      (error : any) => {});
    }
}
