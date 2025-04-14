import { Component } from '@angular/core';

@Component({
  selector: 'media-file-input',
  imports: [],
  template: `
      <input type="file" accept="image/*"  />
    `,
  styleUrl: './media-file-input.component.scss'
})
export class MediaFileInputComponent {

}
