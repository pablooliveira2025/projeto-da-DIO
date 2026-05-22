class personagensjogo {
    constructor(nomedeles, idadedeles, tipopersonagem) {
        this.nomedeles = nomedeles
        this.idadedeles = idadedeles
        this.tipopersonagem = tipopersonagem
    }

    atacar() {

        let ataque = ""

        if (this.tipopersonagem === "mago") {
            ataque = "magia"

        } else if (this.tipopersonagem === "guerreiro") {
            ataque = "espada"

        } else if (this.tipopersonagem === "monge") {
            ataque = "artes marciais"

        } else if (this.tipopersonagem === "ninja") {
            ataque = "shuriken"
        }

        console.log(`o ${this.tipopersonagem} atacou usando ${ataque}`)
    }
}

let infopersonagem = new personagensjogo("Pablo", 20, "mago")

infopersonagem.atacar()