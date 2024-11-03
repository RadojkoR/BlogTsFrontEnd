// import { useState } from "react";
// import {Editor} from "react-draft-wysiwyg";
// import { EditorState } from "draft-js";
// import { convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { useNavigate } from "react-router-dom";


function CreateBlog() {
    // const [editorState, setEditorState] = useState(EditorState.createEmpty());
    // const [title, setTitle] = useState<string>('');
    // const [content, setContent] = useState<string>("");
    // const navigate = useNavigate();

    //  const handleEditorStateChange = (state: EditorState) => {
    //    setEditorState(state);
    //  };


  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center mt-10 mb-5 text-5xl">Create New Blog</h2>
      <form className="w-4/5">
        <div className="flex flex-col">
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 shadow p-3 w-4/5 rounded mb-5"
            placeholder="Title"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content">Content*</label>
          {/* <Editor /> */}
        </div>
      </form>
    </div>
  );
}

export default CreateBlog