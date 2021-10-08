import { useEffect } from "react";
import { useState } from "react"

const useLists = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch('./university.json')
            .then(res => res.json())
            .then(data => setLists(data));
    }, []);
    return [lists, setLists];
}

export default useLists;