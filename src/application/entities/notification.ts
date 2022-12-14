import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationsProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationsProps;

  constructor(props: Replace<NotificationsProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content() {
    return this.props.content;
  }
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId() {
    return this.props.recipientId;
  }
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt() {
    return this.props.readAt;
  }
  public set category(category: string) {
    this.props.category = category;
  }

  public get category() {
    return this.props.category;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}