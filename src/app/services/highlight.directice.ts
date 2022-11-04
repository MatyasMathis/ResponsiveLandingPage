import { ElementRef,OnInit,Directive, Renderer2, HostListener, Input} from "@angular/core";
@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective{
    @Input() highlightColor:string="transparent";
    constructor(private element:ElementRef,private renderer:Renderer2){

    }

    ngOnInit(){
       
}

    @HostListener('mouseover') mouseover(){
        this.renderer.setStyle(this.element.nativeElement,'background-color',this.highlightColor);
    }
    @HostListener('mouseleave') mouseleave(){
        this.renderer.setStyle(this.element.nativeElement,'background-color','transparent');
    }
}