import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appContact]'
})

export class ContactDirective {

    private _appContact

    constructor(private el:ElementRef) {
        this.el.nativeElement.innerHTML += 'conteúdo inserido'
    }

    get appContact() {
        return this._appContact
    }

    @Input()
    set appContact(appContact:string) {
        this._appContact = appContact
        this.changeColor()
    }

    // appContact:string

    @HostListener('click')
    onclick() {
        alert(this.appContact)
    }

    changeColor() {
        this.el.nativeElement.style.color = this._appContact === 'Vinicius Pugliesi' ? 'blue' : 'red'
    }
}