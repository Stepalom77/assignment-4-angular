import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {type:string, name:string, content:string}
  @Input() name:string
  @ViewChild('heading', {static:true}) header:ElementRef
  @ContentChild('contentParagraph', {static:true}) paragraph:ElementRef

  constructor() {
    console.log('constructor called')
  }

  //Triggers when a change is done

  ngOnChanges(changes:SimpleChanges){
    console.log('ng-on-changes called')
    console.log(changes)
  }

  //Triggers when the component is initialized

  ngOnInit(): void {
    console.log('ng-init called')
    console.log( 'Text Content:' + this.header.nativeElement.textContent)
    console.log( 'Text Content of paragraph:' + this.paragraph.nativeElement.textContent)
  }

  //Triggers when Angular checks for any changes

  ngDoCheck(): void {
    console.log('do-check called!')
  }

  //Triggers after the content is initialized

  ngAfterContentInit(): void {
    console.log('ng-after-content-init')
    console.log( 'Text Content of paragraph:' + this.paragraph.nativeElement.textContent)
  }

  //It is called after if check of content change

  ngAfterContentChecked(): void {
    console.log('ng-after-content-check')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log( 'Text Content:' + this.header.nativeElement.textContent)
  }

  ngOnDestroy(): void {
    console.log('on-destroy')
  }

}
