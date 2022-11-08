var produtos = [
    {
        "foto": "img/big-mac.png",
        "nome": "Big Mac",
        "preco": 5.99,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/mc-chicken.png",
        "nome": "Mc Chicken",
        "preco": 4.99,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/double-cb.png",
        "nome": "Double Cheese Burger",
        "preco": 2.99,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/fries.png",
        "nome": "Batata frita",
        "preco": 2.99,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/nuggets.png",
        "nome": "Mc Nuggets",
        "preco": 3.49,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/salad.png",
        "nome": "Salada",
        "preco": 2.79,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/cola.png",
        "nome": "Coca Cola",
        "preco": 1.99,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/lipton.png",
        "nome": "Ice Tea",
        "preco": 1.99,
        "ativo": false,
        "qtd": 1
    },
    {
        "foto": "img/water.png",
        "nome": "Água",
        "preco": 1.49,
        "ativo": false,
        "qtd": 1
    }
];
 
const SelfServiceMachine = {
    data() {
        return {
            produtos: window.produtos
        }
    },

    methods: {
        total: function() {
            var total = 0;

            this.produtos.forEach(function(item) {
                if(item.ativo) {
                    total += item.preco * item.qtd;
                }
                
            });

            return total.toFixed(2);
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');