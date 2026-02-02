import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Member {
  name: string;
  image: string;
}

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmiibosComponent {
  members: Member[] = [
    { name: 'Nayeon', image: 'assets/img/f1.png' },
    { name: 'Jeongyeon', image: 'assets/img/f2.png' },
    { name: 'Momo', image: 'assets/img/f3.png' },
    { name: 'Sana', image: 'assets/img/f4.png' },
    { name: 'Jihyo', image: 'assets/img/f5.png' },
    { name: 'Mina', image: 'assets/img/f6.png' },
    { name: 'Dahyun', image: 'assets/img/f7.png' },
    { name: 'Chaeyoung', image: 'assets/img/f8.png' },
    { name: 'Tzuyu', image: 'assets/img/f9.png' }
  ];
}