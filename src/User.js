import React, {useEffect, useState} from 'react';


const User =() => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        userData();
    },[]);

    const userData = ()=> {
        fetch ("https://dummyjson.com/users")
        .then (res => res.json())
        .then ((data) => {
            setUser (data.users);
            setLoading (true);
            console.log("fetched data --->", user)})
        .catch (e => {throw new Error (e.message);
        });
    };
    if(!loading){
        console.log("loading", loading);
        return <div>loading...</div>
    }
    
     return (<div>
        {user.map(item => (
            <div key={item.id}>
                <img src={item.image} alt= "user profile"/>
                <p>{item.firstName} {item.lastName} {item.maidenName}</p>
                <h4>Details:</h4>
                <p>Email: {item.email} </p>
                <p>Username: {item.username} </p>
                <p>Age: {item.age} </p>
                <p>Gender: {item.gender} </p>
                <p>Address: {item.address.address} </p>
            </div>
        ))}
     </div>); 
    
};
export default User;