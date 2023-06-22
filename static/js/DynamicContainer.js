import React, {useState, useEffect} from 'react';
import { FeaturedContentContainer } from './FeaturedContentWidget';

//Not working bc HTTP-Server cannot serve paths on static. 
const DynamicContainer =({jsonData})=>{
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetchFeaturedContent();
        const intervalId = setInterval(() => {
          fetchFeaturedContent();
        }, 10000);
        return () => clearInterval(intervalId);
      }, []);
    
      const fetchFeaturedContent = async () => {
        const response = await fetch('http://localhost:3004/posts');
        const data = await response.json();
        setContent(data);
      };
    return (
        <FeaturedContentContainer jsonData = {content}/>
    )
};

export default DynamicContainer;