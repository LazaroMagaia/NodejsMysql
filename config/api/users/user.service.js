const pool = require('../../../config/database');

module.exports ={
    //CREATE USER
    create:(data,callback)=>{
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number)
                values(?,?,?,?,?,?)`,
                [
                    data.firstName,
                    data.lastName,
                    data.gender,
                    data.email,
                    data.password,
                    data.number,
                ],
                (error,result) => {
                    if(error)return callback(error);
                    return callback(null,result);
                }
        )
    },
    //GET ALL USERS
    getUsers:callback =>{
        pool.query(
            `select id,firstName, lastName, gender, email, number from registration`,
            [],
            (error, results,fields)=>{
                if(error){
                    return callback(error);
                }else{
                    return callback(null,results);
                }
            }
        )
    },
    //GET USER BY ID
    getUserById:(id,callback)=>{
        pool.query(
            `select id,firstName, lastName, gender, email, number from registration where id=?`,
            [id],
            (error, results,fields)=>{
                if(error){
                    return callback(error);
                }else{
                    return callback(null,results);
                }
            }
        )
    },

    //UPDATE USER
    updateUser:(data,callback)=>{
        pool.query(
            `update registration set firstName =? , lastName =?, gender =?, email =?,
             password =?, number =?  where id = ?`,
                [
                    data.firstName,
                    data.lastName,
                    data.gender,
                    data.email,
                    data.password,
                    data.number,
                    data.id
                ],
                (error,result) => {
                    if(error)return callback(error);
                    return callback(null,result);
                }
        )
    },

    //DELETE USER
    deleteUser:(data, callback)=>{
        pool.query(
            `delete from registration where id = ?`,
            [
                data.id
            ],
            (error, results, fields) =>{
                if(error){
                   return callback(error);
                }else
                {
                    return callback(null,results);
                }
            }
        )
    }
}