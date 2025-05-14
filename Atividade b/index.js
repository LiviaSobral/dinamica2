let personagens = [{nome:"Gandalf",classe:"mago",nivel:1,hp:10,habilidades:["Bola de fogo"],acoesRealizadas:[]}]
//um array pra salvar os personagens com um personagem basico pra usar de base e teste no codigo
function atacar(personagenNum){
    //salva nas ações realizadas a ação de atacar
    const frase = "Personagem "+personagens[personagenNum].nome+" atacou"
    alert(frase)

    personagens[personagenNum].acoesRealizadas.push("Atacou")    
    acao(personagenNum)
}


function defender(personagenNum){
    //salva nas ações realizadas a ação de defender
    const frase = "Personagem "+personagens[personagenNum].nome+" defendeu"
    alert(frase)

    personagens[personagenNum].acoesRealizadas.push("Defendeu")
    acao(personagenNum)
}

function habilidade(personagenNum, habilidadeNum){
    //cria uma frase que varia dependendo da habilidade escolhida e salva essa frase nas ações realizadas
    const frase = "Usou Habilidade Especial "+ personagens[personagenNum].habilidades[habilidadeNum]
    const frase2 = "O Personagen "+personagens[personagenNum].nome+" Usou Habilidade Especial "+ personagens[personagenNum].habilidades[habilidadeNum]
    alert(frase2)

    personagens[personagenNum].acoesRealizadas.push(frase)
    acao(personagenNum)
}

function status(personagenNum){
    //faz console log da vida e habilidades disponiveis do personagen
alert("A vida do personagen está em: "+personagens[personagenNum].hp)
alert("As suas habilidades disponiveis são: "+personagens[personagenNum].habilidades)

}
function achaPersonagen(Nome){
    for (i=0;i<personagens.length;i++){
        //usando o for compara o nome de cada personagen ate achar um compativel então retorna o personagem achado
        if(Nome === personagens[i].nome){
            //por algum motivo colocar toLowerCase no personagen[i].nome faz não achar e colocar lowercase em ambos faz o codigo sempre respoder gandalf

            return personagens[i]
        }
    }

}

function cadastraPersonagen(Nome,Classe,Nivel,vidaMaxima,Habilidades){
    //adiciona ao array um personagem
    const frase = "Personagem "+Nome+" foi criado com sucesso"
    alert(frase)
    personagens.push({nome:Nome,classe:Classe,nivel:Nivel,hp:vidaMaxima,habilidades:Habilidades,acoesRealizadas:[]})
    escolha()
}

function removerPersonagen(personagenNum){
    //remove do array um personagem
    const frase = "Personagem "+personagens[personagenNum].nome+" foi deletado com sucesso"
    alert(frase)
    personagens.splice(personagenNum,1)
    escolha()
}

function listaPersonagens(){
    //utiliza o metodo sort pra ordenar o array comparando com o nome de cada objeto
    return personagens.sort(function (a,b){
        //aqui tem a função para comparar os nomes
        if(a.nome < b.nome){
            return -1
        }else{
            return 1
        }
        
    })

}

function escolha(){
    //as escolhas principais do usuario
    const esc = Number(prompt("Escolha entre criar personagen(0),Selecionar Personagen(1),Remover Personagen(2), listar personagens(3)"))
    if(esc === 0){
        //esse if vai salvar a respostas do usuario em uma variavel e vai então jogar na função essas respostas
        nome= prompt("Escolha um nome")
        classe= prompt("escolha uma classe")
        nivel= Number(prompt("Digite um nivel"))
        habilidades= prompt("Descreva uma habilidade especial")
        hp = 10 + nivel*2
        cadastraPersonagen(nome,classe,nivel,hp,[habilidades])
    }else if(esc ===1){
        //esse if vai mostrar as opções de personagens para selecionar e dependendo da escolha vai mandar o numero pra função acao
        let frase = ""
        for(i=0;i<personagens.length;i++){
            frase = frase + "|O personagen "+personagens[i].nome+" esta na posição ("+i+") |"}
        frase += " Sabendo disso digite o numero do personagen para selecionar"
        perNum = Number(prompt(frase))
        acao(perNum)
    }else if(esc ===2){
        //esse if vai mostrar as opções de personagens e vai pedir um numero para deletar um deles
        let frase = ""
        for(i=0;i<personagens.length;i++){
            frase = frase + "|O personagen "+personagens[i].nome+" esta na posição ("+i+") |"}

        frase += " Sabendo disso digite o numero do personagen que voce deseja deletar"
        perNum = Number(prompt(frase))
        removerPersonagen(perNum)


    }else{
        //esse if vai chamar primeiramente a função lista que ordena os personagens alfabeticamente e então mostra para o usuario os personagens
        listaPersonagens()
        let frase = ""
        for(personagen of personagens){
            frase += "Nome: "+personagen.nome+" Classe: "+personagen.classe+" Nivel: "+personagen.nivel+" HP: "+personagen.hp+" habilidades: "+personagen.habilidades+" ações realizadas: "+personagen.acoesRealizadas+" |  "

        }

        alert(frase)
    }
}

function acao(personagem){
    //essa função é onde o usuario vai poder controlar o personagen e suas ações
    if(personagens[personagem].hp>0){
        //sempre que a função iniciar ela chama a função status para mostrar o status do personagen
        status(personagem)
    decisao = Number(prompt("Escolha entre atacar(0), defender(1), usar uma habilidade especial(2) ou voltar para o menu de opções(3)"))
    if(decisao === 0){
        //esse if chama a função atacar
        atacar(personagem)
    }else if(decisao ===2){
        //esse if chama a função habilidade
        habilidade(personagem,0)
    }else if(decisao === 1){
        //esse if chama a função defender
        defender(personagem)
    }else(
        //pra poder voltar pras escolhas principais
        escolha()
    )
    }else{
        alert("O personagen "+personagens[personagem].nome+" está morto")
    }
    
}


escolha()