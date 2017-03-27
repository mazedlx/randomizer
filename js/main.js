const Vue = require('vue');
const _ = require('lodash');

var app = new Vue({
    el: '#app',
    data: {
        players: [
            {
                name: 'Bernd Hirschler',
                checked: true
            },
            {
                name: 'Christian Leo-Pernold',
                checked: true
            },
            {
                name: 'Karl Kunstparker',
                checked: false

            },
            {
                name: 'Martin Christof',
                checked: true
            },
            {
                name: 'Robert Schottleitner',
                checked: true
            },
            {
                name: 'Wolfgang Rammel',
                checked: true
            },
        ],
        checkedPlayers: [],
        randomizedPlayers: [],
    },

    methods: {
        randomize: function () {
            this.checkedPlayers = _.filter(this.players, player => {
                return player.checked;
            });
            this.randomizedPlayers = _.shuffle(this.checkedPlayers);
        }
    },

    mounted() {

    }
});
