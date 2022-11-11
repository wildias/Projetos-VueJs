
const todosApp = {
    data() {
        return {
            tarefas:[],
            novaTarefa: {
                done: false
            }
        }
    },
    methods: {
        addTarefa: function() {
            if(this.novaTarefa.texto) {
                this.tarefas.push(this.novaTarefa);
                this.novaTarefa = {
                    done: false
                };
                localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
            } else {
                alert("O texto da tarefa é obrigatório!")
            }
        }
    },
    created() {
        this.tarefas = localStorage.getItem("Tarefas") ? JSON.parse(localStorage.getItem("Tarefas")) : this.tarefas;
    },
    updated() {
        localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    }
};

Vue.createApp(todosApp).mount('#app');