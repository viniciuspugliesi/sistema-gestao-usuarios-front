import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from './modal.service';

declare let $: any;

@Component({
    selector: 'app-modal',
    template: '<ng-content></ng-content>'
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input()
    id: string;

    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;

        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        document.body.appendChild(this.element);

        this.element.addEventListener('click', function(e: any) {
            if (e.target.className === 'modal') {
                modal.close();
            }
        });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        $(this.element).find('.ps-modal').css({display: 'block'});
        $('body').css({overflow: 'hidden'});
    }

    close(): void {
        $(this.element).find('.ps-modal').css({display: 'none'});
        $('body').css({overflow: 'auto'});
    }
}
