function getAdmins (map) {
    for([key, value] of map){
    if (value === 'Admin'){
        admins.push(key)
     }
    } 
    return admins;
}

const usuarios = new Map();

usuarios.set ('Rodrigo', 'Admin');
usuarios.set ('Louise', 'Admin');
usuarios.set ('Luiz', 'User');
usuarios.set ('Miguel', 'Admin');

console.log(getAdmins(usuarios));


