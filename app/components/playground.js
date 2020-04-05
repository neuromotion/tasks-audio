import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PlaygroundComponent extends Component {
    @tracked frequency = 200;
    @tracked type = 'triangle';
    typeOptions = ['triangle', 'square', 'sine', 'sawtooth']

    @action
    changeType(context) {
        this.type = context.target.value;
    }

    @action
    play() {
        const context = new AudioContext()
        const o = context.createOscillator()
        const g = context.createGain()
        o.type = this.type
        o.connect(g)
        o.frequency.setValueAtTime(this.frequency, 0)
        g.connect(context.destination)
        o.start()
        o.stop(context.currentTime + 0.4)
    }
}

