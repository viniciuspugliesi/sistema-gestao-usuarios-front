import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appContact]'
})

export class ContactDirective {

    constructor(private el:ElementRef) {
        this.el.nativeElement.innerHTML += 'conteúdo inserido'
    }

    @HostListener('click')

    onclick() {
        alert('fui clicado')
    }
}