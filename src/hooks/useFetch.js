import React, {useState, useEffect} from 'react'
const useFetch =(url)=>{
    let [users, setUsers] = useState([]);
    let [spin, setSpin] = useState(false)
    // const cont ={

    // }
    const getUsersLIst = async () =>{
        let response = await fetch(url);
        let data = await response.json();
        if (response.status !== 200){
            console.log("network slow");
            setSpin(false);
        }else{
            users = data;
            console.log(users)
            setUsers(users);
            setSpin(true);
        }
        // if (response.status == 200) {
        //     users = data;
        //     console.log(users)
        //     setUsers(users);
        //     setSpin(true);
        // }
        // fetch('').then(response=> response.json()).then(data => {
        //     console.log(data);
        // })

    }
    useEffect(() => {
        getUsersLIst();
    }, [])
    return {users,spin}
}
export default useFetch;