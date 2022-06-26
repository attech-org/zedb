export const extractPlainText = (editor: any) => {
    const editorState = editor?.editorState;
    const currentContent = editorState?.getCurrentContent?.();
    const plainText = currentContent?.getPlainText?.("") || "";
    const nextEditorState = { ...editor, plainText };
    return nextEditorState;
  };
  