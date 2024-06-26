
var alunos = []  


var alunoAlterado = null

function adicionar(){
   
   document.getElementById("ra").disabled = false
   alunoAlterado = null
   mostrarModal()
   limparForm()
}

function alterar(ra) {

    
    for(let i = 0; i < alunos.length; i++){
        let aluno = alunos[i]
        if (aluno.ra == ra){
            
            document.getElementById("ra").value = aluno.ra
            document.getElementById("aluno").value = aluno.aluno            
            document.getElementById("curso").value = aluno.curso
            document.getElementById("cidade").value = aluno.cidade
            document.getElementById("estado").value = aluno.estado
            alunoAlterado = aluno
        }
    }
    
    document.getElementById("ra").disabled = true
    mostrarModal()

}

function excluir(ra){
if (confirm("Você deseja realmente excluir?")){
    for(let i=0; i < alunos.length; i++){
        let aluno = alunos[i]
        if (aluno.ra == ra){
            
            alunos.splice(i, 1)
        }
    }
    exibirDados()

}
}

function mostrarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"
}
function ocultarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"
}
function cancelar(){
    limparForm()
    ocultarModal()
}
function salvar(){
    let ra = document.getElementById("ra").value
    let aluno = document.getElementById("aluno").value
    let curso = document.getElementById("curso").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value

   
        if (alunoAlterado == null){
        let cliente = {
                "ra": ra,
                "aluno": aluno,
                "curso": curso,
                "cidade": cidade,
                "estado": estado}

            
            alunos.push(cliente)
        } else{
            alunoAlterado.ra = ra
            alunoAlterado.aluno = aluno            
            alunoAlterado.curso = curso
            alunoAlterado.cidade = cidade
            alunoAlterado.estado = estado
        }

alunoAlterado = null


limparForm()

ocultarModal()

exibirDados()
}

function exibirDados(){
    
    let tbody = document.querySelector("#table-alunos tbody")
    
    
    tbody.innerHTML = " "

    for (let i = 0; i < alunos.length; i++){
    let linha = `
            <tr>
                <td>${alunos[i].ra}</td>
                <td>${alunos[i].aluno}</td>
                <td>${alunos[i].curso}</td>
                <td>${alunos[i].cidade}</td>
                <td>${alunos[i].estado}</td>
                <td>
                    <button onclick="alterar('${alunos[i].ra}')">Alterar</button>
                    <button onclick="excluir('${alunos[i].ra}')">Excluir</button>
                </td>
            </tr>`
    
    let tr = document.createElement("tr")
    tr.innerHTML = linha
    tbody.appendChild(tr)

    }
}

function limparForm (){
    document.getElementById("ra").value = " "
    document.getElementById("aluno").value = " "
    document.getElementById("curso").value = " "
    document.getElementById("cidade").value = " "
    document.getElementById("estado").value = " "
}
