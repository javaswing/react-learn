import { useState, useEffect } from 'react';

export  const usePerson = (personId) => {
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState({});

    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
            setPerson({name: 'javaswing'})
        }, 1000)
    },[personId]);
    return [loading, person]
}