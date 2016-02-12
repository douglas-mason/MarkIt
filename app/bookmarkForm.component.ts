import {Component} from 'angular2/core'

@Component({
  selector: 'bookmark-form',
  templateUrl: './app/bookmarkForm.template.html'
})
export class BookmarkFormComponent {
  public url:string;
  public title:string;
  public category:string;
  public tags:string[];
}
