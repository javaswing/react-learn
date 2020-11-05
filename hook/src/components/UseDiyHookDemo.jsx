import React from 'react'
import { usePerson } from '../hooks/usePerson';

export function UseDiyHookDemo () {
    const [loading, person] = usePerson(28654780)
    if(loading) {
        return <p>加载中</p>
    }

    return (
        <div>
            <p>person内容：</p>
            <p>{person.name}</p>
        </div>
    )
}