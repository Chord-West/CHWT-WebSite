import React,{useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import CreateCategory from "./CreateCategory";


const Category = () => {
    const [addCategory,setAddCategory] = useState(false);
    const [text,setText] = useState('');
    const addCategoryhandler = () =>{
        setAddCategory(true);
        console.log(addCategory);
    }
    const [categorys,setCateGorys] = useState([
        {
            id:1,
            name :'Home'
        },
        {
            id:2,
            name :'About'
        },
        {
            id:3,
            name :'posteditor'
        }

    ]);
    const onChangeText = (e) =>{
        console.log(e.target.value);
        setText(e.target.value);
    };
    const onCreate = () =>{
        const category = {
            id : nextId.current,
            name:text,
        };
        setCateGorys(categorys=>categorys.concat(category));
        nextId.current+=1
        setAddCategory(false);
    };
    const nextId = useRef(4);

    return(
        <>
            <div style={{width:'200px'}}>
                <button onClick={addCategoryhandler}>카테고리추가</button>
                {addCategory&&(
                    <>
                        <input name="category" value={text} onChange={onChangeText}/>
                        <button onClick={onCreate}>등록</button>
                    </>
                    )}
                <CreateCategory categorys={categorys}/>
            </div>
        </>
    );

}

export default Category;


