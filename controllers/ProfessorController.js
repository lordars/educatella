//Exportando o controller
const  {Aluno, Professor, Classe, Recado, Tarefa, Classe_Aluno,Usuario} = require("../models")


module.exports = {
    profInicio:  (req, res) => {
        res.render('professor/inicio');
    },

    profRecados: async  (req, res) => {
        let {page=1} = req.query 
        let {count:total, rows:recadosDB} = await Recado.findAndCountAll({
            limit:5,
            offset:(page -1)* 5
        })
        let totalPagina= Math.round(total/5)
        res.render('professor/recados',{recadosDB,totalPagina});
    },
    profRecadosCriar :async  (req, res) => {
        let recadosDB = await Recado.findAll()
        res.render('professor/criar-recado',{recadosDB});
        
    },
    profRecadosCriar2 :async  (req, res) => {
        const {titulo,descricao}= req.body
        console.log(titulo,descricao)
        const resultado = await Recado.create({
       
         titulo,
         descricao
        
    }).catch(err=>{console.log(err)})

        console.log(resultado)
        
       return res.redirect('recados');
    }, profRecadosApagar: async  (req, res) => {
        let {page=1} = req.query 
        let {count:total, rows:recadosDB} = await Recado.findAndCountAll({
            limit:5,
            offset:(page -1)* 5
        })
        let totalPagina= Math.round(total/5)
        res.render('professor/apagar-recado',{recadosDB,totalPagina});
    },
    profRecadosApagar2: async  (req, res) => {
        const {id}= req.params
        console.log(id)
        const resultado = await Recado.destroy({
            where:{id_recados: id}
        })
        console.log(resultado)
        res.redirect('/professor/apagar-recado');
    },
    profRecadosEditar: async  (req, res) => {
        let {page=1} = req.query 
        let {count:total, rows:recadosDB} = await Recado.findAndCountAll({
            limit:2,
            offset:(page -1)* 2
        })
        let totalPagina= Math.round(total/2)
        res.render('professor/editar-recado',{recadosDB,totalPagina});
    },
    profRecadosEditar2:async  (req, res) => {
        const {id}= req.params
        console.log('soy consola'+ id)
        const {titulo,descricao}= req.body
        console.log(titulo +"consola numero 2"+ descricao)
        const resultado = await Recado.update({
            titulo: titulo,
            descricao: descricao,
            updatedAt: Date.now()
        },
        {
            where:{ id_recados : id}
        })
        console.log(resultado)
        res.redirect('/professor/editar-recado');
    },

    profNotas: (req, res) => {
        res.render('professor/postar-nota');
    },

    profPostarTarefa: (req, res) => {
        res.render('professor/postar-tarefa');
    },
    profCriarSala: (req, res) => {
        res.render('professor/criar-sala');
    },

    profGerenciarAluno: async  (req, res) => {
        let {page=1} = req.query
        
        
        let recadosDB = await Usuario.findAll({
           
            
            include:[{
                
                model: Aluno, 
                as:'usuarioAluno', 
                include: 'usuarioAluno'

                    },
                    {
                        model: Professor,
                        as: 'usuarioProfessor'
                    }]
            
        },{
            limit:5,
            offset:(page -1)* 5
        }).catch(err=>{console.log(err)})
        let totalPagina= "hola"
        //Math.round(total/5)
        
        res.render('professor/gerenciar-aluno',{recadosDB,totalPagina});
    },
    profGerenciarAluno1: (req,res)=>{
        res.redirect('/professor/gerenciar-aluno');
    }
}
