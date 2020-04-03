import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PlayButtonComponent extends Component {
    @action
    play() {
        const context = new AudioContext()
        const o = context.createOscillator()
        const g = context.createGain()
        o.type = this.args.frequency.type
        o.connect(g)
        o.frequency.setValueAtTime(this.args.frequency, 0)
        g.connect(context.destination)
        o.start()
        o.stop(context.currentTime + 0.4)
    }
}
