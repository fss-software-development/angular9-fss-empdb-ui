import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
/**
 * slide in animation
 * @type {AnimationTriggerMetadata}
 */
export const SLIDE_IN = trigger(
  'slideIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('300ms', style({opacity: 1}))
    ])
  ]
);
/**
 * fadeout animation
 * @type {AnimationTriggerMetadata}
 */
export const FADE_OUT = trigger(
  'fadeOut', [
    state('in', style({opacity: 1})),
    transition('* => void', [
      animate('0.3s ease', style({opacity: 0}))
    ])
  ]
);


export const SHAKE_IN = trigger(
  'shake', [
    transition(':enter', [
      style({transform: 'translate3d(-4px, 0, 0)'}),
      animate('300ms cubic-bezier(.36,.07,.19,.97)', style({transform: 'translate3d(0, 0, 0)'}))
    ])
  ]
);
