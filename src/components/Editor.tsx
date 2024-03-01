import * as React from "react";
import { ButtonHTMLAttributes, useState } from "react";
import TextEditor from "react-textarea-autosize";
import "./Editor.css";

type EditorPropsType = {
  maxRows?: number;
  minRows?: number;
  darkMode?: false | true;
  resize?: "both" | "horizontal" | "vertical" | "none";
  className?: string;
  autofocus?: boolean;
  value?: string;
  onCancel?: () => void;
  onSave: (text: string) => void;
  loading?: boolean;
};

const Editor = ({
  darkMode = false,
  minRows = 10,
  maxRows,
  className = "",
  resize = "both",
  autofocus = false,
  value = "",
  onSave,
  onCancel,
  loading = false,
}: EditorPropsType) => {
  const [text, setText] = useState<string>(value);
  return (
    <div className={`${darkMode ? "dark" : "light"} container`}>
      <TextEditor
        autoFocus={autofocus}
        style={{ resize: resize }}
        onChange={(e) => setText(e.target.value)}
        value={text}
        maxRows={maxRows}
        minRows={minRows}
        className={`textarea ${className} ${darkMode ? "dark" : "light"}`}
      />
      <div className={"actions"}>
        <IconBtn
          onClick={onCancel}
          disabled={loading}
          className={`btn cancelBtn"`}
          Icon="close"
          aria-label="cancel-button"
          darkMode={darkMode}
        />
        <IconBtn
          onClick={() => onSave(text)}
          disabled={loading || text.trim().length < 1}
          className={`btn saveBtn`}
          aria-label="save-button"
          Icon="check"
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

type IconBtnPropsType = {
  Icon: string;
  darkMode?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconBtn = ({ Icon, darkMode = false, ...props }: IconBtnPropsType) => {
  return (
    <button {...props}>
      <span className="material-symbols-outlined">{Icon}</span>
    </button>
  );
};

export default Editor;
