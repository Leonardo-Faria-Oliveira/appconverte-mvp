import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-mockup',
  imports: [],
  template: `
	<div class="main-preview-container" >
		<div class="preview-container" >
			<img class="preview-mockup" [src]="mockup" alt="cellphone-mockup" />
			<div class="preview-notification">
				<img class="media" [src]="media" alt="notification-media"/>
				<div class="content">
					<h5 class="title">{{title}}</h5>
					<p  class="message">{{content}}</p>
				</div>
			</div>
		</div>
	</div>
  `,
  styleUrl: './preview-mockup.component.scss'
})
export class PreviewMockupComponent {

	@Input() public title: string = 'Promoção de fim de ano chegando';
	@Input() public content: string = 'Aproveite nossas ofertas de fim de ano!';
	@Input() public media: string = '../../../assets/images/default.jpg';
	public mockup: string = '../../../assets/images/mockup.png';

}
