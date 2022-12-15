import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationsProps,
} from '@application/entities/notification';

export function makeNotification(
  override: Partial<NotificationsProps> = {},
): Notification {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'example-recipient-id',
    ...override,
  });
}
