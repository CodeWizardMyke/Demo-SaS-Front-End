import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import './styles.css';

const FieldTextArea = ({
    name,
    value = "",
    onChange,
    placeholder
}) => {

    return (
        <div className="editor-container">
            <span className="warning">
                Para usar a barra de ferramentas e suas funcionalidades, 
                é necessário um dispositivo com tela maior.
            </span>
            <CKEditor
                editor={ClassicEditor}
                data={value || ""}

                config={{
                    placeholder,

                    toolbar: [
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        "underline",
                        "|",
                        "bulletedList",
                        "numberedList",
                        "|",
                        "link",
                        "blockQuote",
                        "insertTable",
                        "|",
                        "undo",
                        "redo"
                    ]
                }}

                onChange={(event, editor) => {
                    const data = editor.getData();

                    onChange({
                        target: {
                            name,
                            value: data
                        }
                    });
                }}
            />
        </div>
    );
};


export default FieldTextArea;
