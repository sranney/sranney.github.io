import {useState, useEffect} from 'react';

export default function useSearchFilter(blogs=[], searchValue='') {
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {

        const searchLength = searchValue.length;
        if (blogs) {
            const searchArr = blogs.reduce((collection, blog) => {
                if (
                    blog.meta.tags.find(({tag}) => tag.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) 
                    || (blog.title && blog.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
                ) {
                    return [...collection, blog];
                }
                return [...collection];
            }, []);

            setFilteredBlogs(
                (searchLength > 0 && searchArr.length > 0 && searchArr)
                || (searchLength === 0 && blogs)
                || (searchLength > 0 && searchArr.length === 0 && null)
            );
        }
    },[searchValue, blogs]);

    return [filteredBlogs];
};
