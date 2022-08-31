import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function MappersContainer ({ id }) {
    const [mappers, setMappers] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:9292/followers/${id}`)
        .then((r)=>r.json())
        .then((data)=>{setMappers(data)})
    },[])
    console.log(mappers)
    
    return (
        <div className="container" id="mappers">
            <h4>Mappers rendered for follower</h4>
        </div>
    )
}