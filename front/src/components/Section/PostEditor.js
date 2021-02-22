import React,{useState,useRef} from 'react';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';


const PostEditor = () => {
    const editorRef = React.createRef();
    const [content,setContent] = useState('');
    const [title,setTitle] = useState('');
    const onSaveContent = () => {
        console.log(editorRef.current.getInstance().getHtml());
    };

    return(
        <div style={{ width:'800px', background:'#ffffff', overflow:'hidden',
            boxShadow:'3px 6px 5px 1px rgba(0, 0, 0, 0.25)',borderRadius: '20px'}}>
            <div style={{fontSize:'24px',display:'flex',width:'100%',
                background:'#23221E',height:'130px',color:'#ffffff',
                justifyContent:'center',alignItems:'center',boxShadow:'3px 6px 5px 1px rgba(0, 0, 0, 0.1)',
                fontWeight:'bolder'
            }}>
                CHWT-ADMIN-글쓰기
            </div>
            <div className="title" style={{display : 'flex', margin: '30px 0px 30px 0px'}}>
                <div className="category_list" style={{width:'200px'}}></div>
                <input/>
            </div>

                <Editor
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="markdown"
                    useCommandShortcut={true}
                    ref={editorRef}
                />
                <div id="button">
                    <button className="btn_save" onClick={onSaveContent}>Save</button>
                </div>

        </div>
    );
};

export default PostEditor;