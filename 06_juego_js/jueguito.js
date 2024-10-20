// Módulo
jueguito = (() => {

    class Personaje {
        #lema; 
        #nivel = 1000; 

        constructor(nombre, alter) {
            this.nombre = nombre;
            this.alter = alter;
        }

        decirLema() {
            return this.#lema;
        }

        recibirAtaque(valor) {
            this.#nivel -= valor; 
        }

        get getNivel() {
            return this.#nivel;
        }

        set setLema(lema) {
            this.#lema = lema;
        }

        get getLema() {
            return `Hola soy ${this.nombre}. ${this.#lema}`;
        }
    }


    class Heroe extends Personaje {
        constructor(nombre, alter, ciudad) {
            super(nombre, alter); 
            this.ciudad = ciudad;
        }
    }

    class Villano extends Personaje {
        destruir() {
            console.log(`SOY EL MÁS MALO + ${super.decirLema()}`);
        }
    }


    let spiderman = new Heroe('Peter', 'Spiderman', 'Queens');
    spiderman.setLema = 'Un gran poder conlleva una gran responsabilidad';
    let greenGoblin = new Villano('Norman', 'Green Goblin');
    greenGoblin.setLema = 'El mejor guerrero es aquel que no ataca ni cuerpo ni a la mente, es aquel que ataca al corazon.';

    const spidermanAtaca = () => {
        let valorAtaque = Math.floor(Math.random() * 100);
        greenGoblin.recibirAtaque(valorAtaque);
        document.getElementById('goblinLevel').innerText = greenGoblin.getNivel;
        document.getElementById('goblinLema').innerText = greenGoblin.getLema;

  
        const spidermanImg = document.getElementById('spidermanImg');
        spidermanImg.classList.add('attack');
        setTimeout(() => {
            spidermanImg.classList.remove('attack');
        }, 300);

        verificarGanador();
    };

    const goblinAtaca = () => {
        let valorAtaque = Math.floor(Math.random() * 100);
        spiderman.recibirAtaque(valorAtaque);
        document.getElementById('spidermanLevel').innerText = spiderman.getNivel;
        document.getElementById('spidermanLema').innerText = spiderman.getLema;

        // Agregar animación
        const goblinImg = document.getElementById('goblinImg');
        goblinImg.classList.add('attack');
        setTimeout(() => {
            goblinImg.classList.remove('attack');
        }, 300);

        verificarGanador();
    };

    const verificarGanador = () => {
        if (spiderman.getNivel <= 0) {
            document.getElementById('resultado').innerText = `¡El ganador es Green Goblin!`;
        } else if (greenGoblin.getNivel <= 0) {
            document.getElementById('resultado').innerText = `¡El ganador es Spiderman!`;
        }
    };

    return {
        spidermanAtaca,
        goblinAtaca
    };
})();
