export interface ITelegramLogFilter {
  lastLogId: number;
  direction: number; // 1 or -1
  pageSize: number;
  requestTelegramId?: number;
  responseTelegramId?: number;
  senderFk?: number;
  receiverFk?: number;
  fromDate?: string;
  toDate?: string;
}