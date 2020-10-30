import { Pipe, PipeTransform } from '@angular/core';
import { ITelegram } from '@arc.module/models/interfaces/telegram.interface';


@Pipe({
  name: 'getTelegramNameById'
})
export class GetTelegramNameByIdPipe implements PipeTransform {

  transform(value: ITelegram[], teleId: number): string {
    return value.find(x => x.telegramId == teleId)?.name;
  }
}
