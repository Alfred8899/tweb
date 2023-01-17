/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import contextMenuController from '../../helpers/contextMenuController';
import {attachContextMenuListener} from '../../helpers/dom/attachContextMenuListener';
import cancelEvent from '../../helpers/dom/cancelEvent';
import ListenerSetter from '../../helpers/listenerSetter';
import rootScope from '../../lib/rootScope';
import {ButtonMenuItemOptions, ButtonMenuSync} from '../buttonMenu';

export default class SendMenu {
  public sendMenu: HTMLElement;
  private sendMenuButtons: (ButtonMenuItemOptions & {verify: () => boolean})[];
  private type: 'schedule' | 'reminder';

  constructor(options: {
    onSilentClick: () => void,
    onScheduleClick: () => void,
    listenerSetter?: ListenerSetter,
    openSide: string,
    onContextElement: HTMLElement,
    onOpen?: () => boolean
  }) {
    this.sendMenuButtons = [{
      icon: 'mute',
      text: 'Chat.Send.WithoutSound',
      onClick: options.onSilentClick,
      verify: () => this.type === 'schedule'
    }, {
      icon: 'schedule',
      text: 'Chat.Send.ScheduledMessage',
      onClick: options.onScheduleClick,
      verify: () => this.type === 'schedule'
    }, {
      icon: 'schedule',
      text: 'Chat.Send.SetReminder',
      onClick: options.onScheduleClick,
      verify: () => this.type === 'reminder'
    }];

    this.sendMenu = ButtonMenuSync({buttons: this.sendMenuButtons, listenerSetter: options.listenerSetter});
    this.sendMenu.classList.add('menu-send', options.openSide);

    attachContextMenuListener({
      element: options.onContextElement,
      callback: (e) => {
        if(options.onOpen && !options.onOpen()) {
          return;
        }

        this.sendMenuButtons.forEach((button) => {
          button.element.classList.toggle('hide', !button.verify());
        });

        cancelEvent(e);
        contextMenuController.openBtnMenu(this.sendMenu);
      },
      listenerSetter: options.listenerSetter
    });
  }

  public setPeerId(peerId: PeerId) {
    this.type = peerId === rootScope.myId ? 'reminder' : 'schedule';
  }
};
