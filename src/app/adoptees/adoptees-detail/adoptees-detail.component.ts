import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { Adoptees } from "../adoptees.model";
import { AdopteesService } from "../adoptees.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-adoptees-detail",
  templateUrl: "./adoptees-detail.component.html",
  styleUrls: ["./adoptees-detail.component.css"]
})
export class AdopteesDetailComponent implements OnInit {
  adoptee: Adoptees;
  id: number;
  closeResult: string; // modal value

  constructor(
    private adopteesService: AdopteesService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  openSm(content) {
    this.modalService.open(content, { size: "sm" });
  }
  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.adoptee = this.adopteesService.getAdoptee(this.id);
    });
  }

  onEditAdoptee() {
    this.router.navigate(["edit"], { relativeTo: this.route });
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteAdoptee() {
    this.adopteesService.deleteAdoptee(this.id);
    this.router.navigate(["/adoptees"]);
  }

  onCloseDetail() {
    this.router.navigate(["/"]);
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
