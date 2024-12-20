class Component {
    constructor(selector) {
        this.$el=document.querySelector(selector)
    }

    blockHide() {
        this.$el.style.display = 'none'
    }

    editColor(color) {
        this.$el.style.background=color
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = options.width+'px'
        this.$el.style.height=options.height+'px'
        this.$el.style.background=options.color
    }
}

const box1 = new Box ({
    selector: '#box1',
    width: 1000,
    height: 50,
    color: 'blue'
})

setTimeout(() => {
    box1.editColor('red'); 
    box1.$el.style.display = 'block'; 
}, 2000);

setTimeout(() => {
    box1.toggleVisibility(); 
    setTimeout(() => {
        box1.toggleVisibility(); 
    }, 2000);
}, 4000);