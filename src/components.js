// Components file makes possible to add components to global scope
import Vue from 'vue';

// Vue.component(id,properties)

Vue.component('Button-String', {
  template: '<button @click="click">Click {{ count }} times</button>',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('Button-Template-String', {
  template: `
    <button @click="click">
      Click ButtonTemplate {{ count }} times
    </button>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('ButtonXTemplate', {
  template: '#button-x-template',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('ButtonInLine', {
  template: '#button-x-template',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
});

Vue.component('ButtonRender', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
  render(createElement) {
    return createElement(
      'button',
      {
        on: {
          click: () => { this.count += 1; },
        },
      },
      [
        `Click ButtonRender ${this.count} times`,
      ],
    );
  },
});

Vue.component('ButtonJSX', {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count += 1;
    },
  },
  render() {
    return (
      <button onCLick={this.click}>
        Click ButtonJSX { this.count } times
      </button>
    );
  },
});
