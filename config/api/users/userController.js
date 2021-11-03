const {create, deleteUser, updateUser, getUserById, getUsers } = require("./user.service");
const {genSaltSync, hashSync} = require("bcrypt");
module.exports = {
    createUser:(req,res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body,(error,results)=>{
            if(error){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Ops! aconteceu um erro '_' "
                })
            }return res.status(200).json({
                success:1,
                data:results,
            })
        });
    },
    getUserById:(req,res)=>{
        const id = req.params.id;
        getUserById(id,(err,results)=>{
            if(err){
                console.log(err)
                return;
            }if(!results){
                return res.json({
                    sucess:0,
                    message:"Nenhum usuario encontrado"
                })
            }return res.json({
                sucess:1,
                data:results
            })
        });
    },
    getUsers:(req,res)=>{
        getUsers((err,results)=>{
            if(err){
                console.log(err)
                return;
            }
            return res.json({
                success:1,
                data:results
            })
        })
    },
    updateUser:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body,(error,results)=>{
            if(error){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Ops! aconteceu um erro '_' "
                })
            }return res.status(200).json({
                success:1,
                message:"Usuario editado com sucesso",
            })
        });
    },
    deleteUser:(req,res)=>{
        const data =  req.body;
        deleteUser(data,(error,results)=>{
            if(error){
                console.log(error)
                return;
            }if(!results){
                return res.json({
                    success:0,
                    message:"Ops! aconteceu um erro '_' "
                })
            }return res.json({
                success:1,
                message:"Usuario Removido com sucesso"
            })
        })
    }
}
