import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FileSelectEvent, FileUploadEvent, FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'media-file-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FileUploadModule],
  template: `
      <p-fileUpload
        *ngIf="file !=null"
        accept="image/*"
        mode="advanced"
        styleClass="media-input"
        chooseLabel="Escolher arquivo"
        [files]="[file!]"
        uploadLabel="Enviar"
        cancelLabel="Cancelar"
        [auto]="true"
        [customUpload]="true"
        (onSelect)="onSelect($event)" 
        (clear)="onClear()"
        class="w-full "
      ></p-fileUpload>
      <p-fileUpload
        *ngIf="file ==null"
        accept="image/*"
        mode="advanced"
        styleClass="media-input"
        chooseLabel="Escolher arquivo"
        uploadLabel="Enviar"
        cancelLabel="Cancelar"
        [auto]="true"
        [customUpload]="true"
        (onSelect)="onSelect($event)" 
        (clear)="onClear()"
        class="w-full "
      ></p-fileUpload>

  `,
  styleUrl: "./media-file-input.component.scss",
})
export class MediaFileInputComponent{
  @Output() fileSelected = new EventEmitter<File>();


  @Input() file!: File | null;

  setFile(file: File | null) {
    this.file = file;
  }

  onSelect(event: FileSelectEvent){
    const file = event.files[0]
    this.setFile(file);
    this.fileSelected.emit(this.file!);
  }



  onClear(): void {
    this.fileSelected.emit();
  }


}